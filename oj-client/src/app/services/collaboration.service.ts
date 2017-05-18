import { Injectable } from '@angular/core';
import { COLORS } from '../../assets/colors';

declare var io : any;
declare var ace : any;

@Injectable()
export class CollaborationService {
  clientsInfo: Object = {}; // {socketId : {marker : col, row; name : '...'}}
  clientNumber: number = 0; // the total number of clients except myself
  collaborationSocket: any;

  constructor() { }

  init(editor: any, sessionId: string) : void {
    this.collaborationSocket =
      io(window.location.origin, {query: {'sessionId': sessionId}});

    // this.collaborationSocket.on('message', (message) => {
    //   console.log('message from server: ' + message);
    // })

    // listening to others' changes
    this.collaborationSocket.on('change', (delta: string) => {
      console.log('CollaborationService - editor changed' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });

    // listening to others' cursor move
    this.collaborationSocket.on('cursorMove', (cursor: string) => {
      console.log('CollaborationService - cursorMove : ' + cursor);
      cursor = JSON.parse(cursor);
      let x = cursor['row'];
      let y = cursor['column'];
      let clientId = cursor['socketId'];
      // console.log("x = " + x + " , y = " + y + " , clientId = " + clientId);

      let session = editor.getSession();
      if (clientId in this.clientsInfo) {
        // if the cursor exists, then remove the previous one
        session.removeMarker(this.clientsInfo[clientId]['marker']);
      }
      else {
        // if the cursor doesn't exist, then create one and choose color
        this.clientsInfo[clientId] = {};
        let css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.editor_cursor_' + clientId
          + '{ position: absolute; background: ' + COLORS[this.clientNumber]
          + ';' + 'z-index: 100; width: 3px !important;}';
        document.body.appendChild(css);
        this.clientNumber ++;
      }

      // draw a new cursor
      let Range = ace.require('ace/range').Range;
      let newMarker = session.addMarker(
        new Range(x, y, x, y+1),
        'editor_cursor_' + clientId,
        true
      );
      this.clientsInfo[clientId]['marker'] = newMarker;
      // console.log("clientInfo : " + JSON.stringify(this.clientsInfo));
    });

  }

  change(delta: string): void {
    // send the change to server when there's any change in current editor
    this.collaborationSocket.emit('change', delta);
  }

  cursorMove(cursor: string): void {
    // send the cursor move to server
    // console.log("CursorMove self : "+ cursor);
    this.collaborationSocket.emit('cursorMove', cursor);
  }

  // emit a message to server to ask for restore buffer information
  restoreBuffer(): void {
    this.collaborationSocket.emit('restoreBuffer');
  }

}
