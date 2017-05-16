module.exports = function(io) {
  // to know how many people for each problem(sessionId)
  // and record their socketId mapped with sessionId
  var collaborations = [];
  var socketIdToSessionId = [];

  io.on('connection', (socket) => {
    var sessionId = socket.handshake.query['sessionId'];
    socketIdToSessionId[socket.id] = sessionId;

    // add socket.id to the participants of corresponding session
    if ( !(sessionId in collaborations)) {
      collaborations[sessionId] = {
        'participants': []
      }
    }
    collaborations[sessionId]['participants'].push(socket.id);

    // listening to change event
    socket.on('change', delta => {
      console.log('editorSocketService - change' + socketIdToSessionId[socket.Id] + ' to: ' + delta);
      eventHandler(socket.id, 'change', delta);
    }) // end of socket.on

    // listening to cursor move
    socket.on('cursorMove', cursor => {
      console.log('editorSocketService - cursor move : ' + cursor);
      cursor = JSON.parse(cursor);
      cursor['socketId'] = socket.id;
      eventHandler(socket.id, 'cursorMove', JSON.stringify(cursor));
    }) // end of socket.on
  }); // end of io.on

  var eventHandler = function(socketId, eventName, dataString) {
    let sessionId = socketIdToSessionId[socketId];
    if (sessionId in collaborations) {
      let participants = collaborations[sessionId]['participants'];
      for (var i = 0; i < participants.length; i++) {
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
