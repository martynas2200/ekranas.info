import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  protected status = false;
  protected connection = true;
  socket: SocketIOClient.Socket;
  constructor() { }
  // constructor(private settings: SettingsService) { }

public start() {
//   this.socket = io.connect(window.location.protocol + '//' + window.location.hostname +
//   (window.location.port ? ':' + window.location.port : ''), {
//               transports: ['websocket'],
//               query: {
//                   token: this.settings.key
//               }
//           });
//           // $('form').submit(function() {
//           //     socket.emit('chat message', $('#m').val());
//           //     $('#m').val('');
//           //     return false;
//           // });
//   this.socket.on('chat message', (msg: any) => {
//     console.log(msg);
//       // $('#messages').append($('<li>').text(msg));
//       // window.scrollTo(0, document.body.scrollHeight);
//   });
// //   this.socket.on('message', (msg: any) => {
// //     console.log(msg);
// //   });
//   this.socket.on('connect', (msg: any) => {
//     this.status = true;
//   });
//   this.socket.on('disconnect', (msg: any) => {
//     this.status = false;
//   });
}
// // // EMITTER
// // sendMessage(msg: string) {
// //   this.socket.emit('newMessage', { message: msg });
// // }
}
