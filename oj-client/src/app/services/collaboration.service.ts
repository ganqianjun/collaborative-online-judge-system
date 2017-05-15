import { Injectable } from '@angular/core';

declare var io : any;

@Injectable()
export class CollaborationService {
  collaborationSocket: any;

  constructor() { }

  init(): void {
    this.collaborationSocket =
      io(window.location.origin, {query: 'message=' + 'test'});

    this.collaborationSocket.on('message', (message) => {
      console.log('message from server: ' + message);
    })
  }

}
