import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-message-form',
  template: `
    <style>
      .wrapper {
        width: 20em;
        height: 40em;
        background-color: #18191D;
        display: flex;
        padding: 1em;
        flex-direction: column-reverse;
      }
      .inputForm {
          display: flex;
          justify-content: center;
          
      }
      .inputForm * {
          padding: 1em;
          margin: 0.1em;
      }
    </style>

    <div class="wrapper">
      <div class="inputForm">
        <input type="text" #messageInput>
        <button (click)="onSendMessage(messageInput)">Send</button>
      </div>
    </div>
  `
})
export class MessageFormComponent implements OnInit {
  @Output() sendMessage = new EventEmitter<String>();

  ngOnInit(): void {
  }
  onSendMessage(elem: HTMLInputElement) {
    this.sendMessage.emit(elem.value);

    if (elem != undefined)
      elem.value = "";
  }
}
