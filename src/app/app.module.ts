import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatBoxComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
