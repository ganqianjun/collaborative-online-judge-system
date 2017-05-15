import { Injectable } from '@angular/core';

declare var io : any;

@Injectable()
export class CollaborationService {
  collaborationSocket: any;

  constructor() { }

  init(editor: any, sessionId: string): void {
    this.collaborationSocket =
      io(window.location.origin, {query: 'sessionId' + sessionId});

    // this.collaborationSocket.on('message', (message) => {
    //   console.log('message from server: ' + message);
    // })

    // listening to others' changes
    this.collaborationSocket.on('change', (delta: string) => {
      console.log('CollaborationService - editor changed' + delta);
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    })

  }

  change(delta: string): void {
    // send the change to server when there's any change in current editor
    this.collaborationSocket.emit('change', delta);
  }

}
