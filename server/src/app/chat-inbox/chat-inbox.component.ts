import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

const SOCKET_ENDPOINT = "localhost:3000";

@Component({
    selector: 'app-chat-inbox',
    templateUrl: './chat-inbox.component.html',
    styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {
    socket: any

    constructor() { }

    ngOnInit(): void {
        this.setupSocketConnection()
    }

    setupSocketConnection() {
        this.socket = io(SOCKET_ENDPOINT)
    }

}
