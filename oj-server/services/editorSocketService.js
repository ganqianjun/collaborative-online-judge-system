var redisClient = require('../modules/redisClient');

const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
  // to know how many people for each problem(sessionId)
  // and record their socketId mapped with sessionId
  var collaborations = [];
  var socketIdToSessionId = [];
  // we need use redis in other projects, so add a project path to it
  var sessionPath = '/coj_server/';

  io.on('connection', (socket) => {
    var sessionId = socket.handshake.query['sessionId'];
    socketIdToSessionId[socket.id] = sessionId;
    console.log('editorSocketService - socket.id : ' + socket.id);
    console.log('editorSocketService - sessionId : ' + sessionId);

    // to check whether sessionId exists
    // if it exists, then add the new client to it and apply previous change
    // else 1. this is a new session  2. other clients left and the session
    // terminated previously, there's history change for you
    // so we need to check the seesion id in redis
    if ( sessionId in collaborations ) {
      collaborations[sessionId]['participants'].push(socket.id);
    }
    else {
      redisClient.get(sessionPath + sessionId, function(data) {
        if (data) {
          console.log('editorSocketService : session terminated previously');
          collaborations[sessionId] = {
            'cachedInstructions': JSON.parse(data),
            'participants': []
          };
        }
        else {
          console.log('editorSocketService : this is a new session');
          collaborations[sessionId] = {
            'cachedInstructions': [],
            'participants': []
          };
        }
        collaborations[sessionId]['participants'].push(socket.id);
      }); // end of redisClient
    }

    // listening to change event
    // before emit the change to client, cache the change into collaborations
    socket.on('change', delta => {
      console.log('editorSocketService - change' + socketIdToSessionId[socket.Id] + ' to: ' + delta);
      let sessionId = socketIdToSessionId[socket.id];
      if (sessionId in collaborations) {
        collaborations[sessionId]['cachedInstructions'].push(
          ['change', delta, Date.now()]
        );
      }
      eventHandler(socket.id, 'change', delta);
    }) // end of socket.on

    // listening to cursor move
    socket.on('cursorMove', cursor => {
      console.log('editorSocketService - cursor move : ' + cursor);
      cursor = JSON.parse(cursor);
      cursor['socketId'] = socket.id;
      eventHandler(socket.id, 'cursorMove', JSON.stringify(cursor));
    }) // end of socket.on

    socket.on('restoreBuffer', () => {
      console.log('editorSocketService - restoreBuffer');
      let sessionId = socketIdToSessionId[socket.id];
      if (sessionId in collaborations) {
        let cachedInstructions = collaborations[sessionId]['cachedInstructions'];
        for (let i = 0; i < cachedInstructions.length; i++) {
          // [i][0] - 'change', [i][1] - delta (string)
          socket.emit(cachedInstructions[i][0], cachedInstructions[i][1]);
        }
      }
      else {
        console.log('editorSocketService - Warning : restoreBuffer');
      }
    }) // end of socket.on

    // if the last client leaves the session, store the history in redis
    socket.on('disconnect', () => {
      let sessionId = socketIdToSessionId[socket.id];
      console.log('editorSocketService - disconnect : ' + sessionId);
      let foundAndRemoved = false;
      if (sessionId in collaborations) {
        let participants = collaborations[sessionId]['participants'];
        let index = participants.indexOf(socket.id);
        if (index >= 0) {
          participants.splice(index, 1); // delete 1 from the position 'index'
          foundAndRemoved = true;
          if (participants.length === 0) {
            console.log('editorSocketService - last client is leaving');

            let key = sessionPath + sessionId;
            let value = JSON.stringify(collaborations[sessionId]['cachedInstructions']);

            redisClient.set(key, value, redisClient.redisPrint);
            redisClient.expire(key, TIMEOUT_IN_SECONDS);
            delete collaborations[sessionId];
          }
        }
      }
      else {
        console.log('editorSocketService - Warning : disconnect');
      }

    }) // end of socket.on
  }); // end of io.on

  var eventHandler = function(socketId, eventName, dataString) {
    let sessionId = socketIdToSessionId[socketId];
    if (sessionId in collaborations) {
      let participants = collaborations[sessionId]['participants'];
      for (let i = 0; i < participants.length; i++) {
        if (socketId != participants[i]) {
          io.to(participants[i]).emit(eventName, dataString);
        }
      }
    }
    else {
      console.log('editorSocketService : sessionId doesn\'t exist in collaborations');
    }
  };

}
