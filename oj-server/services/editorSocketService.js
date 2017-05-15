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
      console.log('change' + socketIdToSessionId[socket.Id] + ' to: ' + delta);
      let sessionId = socketIdToSessionId[socket.id];
      if (sessionId in collaborations) {
        let participants = collaborations[sessionId]['participants'];
        for (var i = 0; i < participants.length; i++) {
          if (socket.id != participants[i]) {
            io.to(participants[i]).emit('change', delta);
          }
        }
      }
      else {
        console.log('editorSocketService : sessionId doesn\'t exist in collaborations');
      }
    }) // end of socket.on
  }) // end of io.on

}
