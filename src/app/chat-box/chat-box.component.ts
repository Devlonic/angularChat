import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  template: `
    <style>
      .wrapper {
        width: 20rem;
        padding: 1em;
        height: 40rem;
        background-color:  #18191D;
      }
      p {
        background-color: #282E33;
        display: inline;
        color: white;
        font-size: 2em;
        border-radius: 20%;
      }
      .row {
        margin: 0.5em;
        display: flex;
        justify-content: right;
      }
    </style>

    <div class="wrapper">
        <div class="row" style="justify-content: {{MessageList[0].side}};">
          <p>{{MessageList[0].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[1].side}};">
          <p>{{MessageList[1].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[2].side}};">
          <p>{{MessageList[2].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[3].side}};">
          <p>{{MessageList[3].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[4].side}};">
          <p>{{MessageList[4].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[5].side}};">
          <p>{{MessageList[5].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[6].side}};">
          <p>{{MessageList[6].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[7].side}};">
          <p>{{MessageList[7].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[8].side}};">
          <p>{{MessageList[8].text}}</p>
        </div>
        <div class="row" style="justify-content: {{MessageList[9].side}};">
          <p>{{MessageList[9].text}}</p>
        </div>
    </div>
  `
})
export class ChatBoxComponent implements OnInit {
  @Input() MessageList: any[] = [];

  constructor() {

  }
  ngOnInit(): void {
  }

}
