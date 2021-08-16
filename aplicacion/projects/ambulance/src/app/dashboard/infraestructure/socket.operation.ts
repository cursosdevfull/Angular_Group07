import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketRepository } from '../application/socket.repository';
import { Entity } from '../domain/entity';
import * as io from 'socket.io-client';

@Injectable()
export class SocketOperation extends SocketRepository {
  socket: any;

  constructor() {
    super();
    this.socket = io.connect('https://p7inv.sse.codesandbox.io/');
  }

  listen(eventName: string): Observable<Entity[]> {
    return new Observable((observer) => {
      this.socket.on(eventName, (result: any) => observer.next(result));
    });
  }
}
