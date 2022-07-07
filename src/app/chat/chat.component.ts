import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
  <style>
    .wrapper {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #282E33;
    }
  </style>
  <div class="wrapper">
    <app-message-form (sendMessage)="onLeftMessageRecieve($event)"></app-message-form>
    <app-chat-box [MessageList]=messageStory></app-chat-box>
    <app-message-form (sendMessage)="onRightMessageRecieve($event)"></app-message-form>
  </div>
  `
})
export class ChatComponent implements OnInit {
  messageStory: any[];
  constructor() {
    this.messageStory = [];
  }

  ngOnInit(): void {
  }
  onLeftMessageRecieve(msg: any): void {
    this.messageStory.push({
      side: "left",
      text: msg
    });
  }
  onRightMessageRecieve(msg: any): void {
    this.messageStory.push({
      side: "right",
      text: msg
    });

  }
}
