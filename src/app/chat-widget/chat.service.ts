import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatService {
    constructor(private http: HttpClient) { }
    reply(message:string) {
        return {
          text: "Message Added",
          date: new Date(),
          reply: false,
          type: 'text',
          files: [],
          user: {
            name: 'Bot',
            avatar: 'https://i.gifer.com/no.gif',
          },
        }
      //return this.http.post('post url',{});
    }
    loadMessages() {
      return [{
        text: "Message 1",
        date: new Date(),
        reply: false,
        type: 'text',
        files: [],
        user: {
          name: 'Bot',
          avatar: 'https://i.gifer.com/no.gif',
        },
      },{
        text: "Message 2",
        date: new Date(),
        reply: true,
        type: 'text',
        files: [],
        user: {
          name: 'John Doe',
          avatar: 'https://i.gifer.com/no.gif',
        },
      },{
        text: "Message 3",
        date: new Date(),
        reply: false,
        type: 'text',
        files: [],
        user: {
          name: 'Bot',
          avatar: 'https://i.gifer.com/no.gif',
        },
      }]
       // return [] as any[];
        //return this.http.get<any[]>('get url');
      }
}
