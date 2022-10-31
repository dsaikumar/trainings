import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ChatMessage } from "../types/chat-message.type";


@Component({
  selector: 'user-observe',
  templateUrl: 'user-observe.component.html',
  styleUrls: ['user-observe.component.css']
})
export class UserObserveComponent{
  messagesObservable:BehaviorSubject<ChatMessage> = new BehaviorSubject<ChatMessage>({
    message: 'Welcome',
    sentTime: new Date()
  });
  messageText1: string = "";
  messageText2: string = "";
  messageText3: string = "";
  messages1: ChatMessage[] = [];
  messages2: ChatMessage[] = [];
  messages3: ChatMessage[] = [];
  constructor(){
    this.listenMessages();
  }
  sentFromChat(message: string, element: any){
    const temp: ChatMessage = {
      message: message,
      sentTime: new Date()
    };
    this.messagesObservable.next(temp);
    element.value = "";
  }
  listenMessages(){
    this.messagesObservable.subscribe((message: ChatMessage)=>{
      this.messages1.push(message);
      this.messages2.push(message);
      this.messages3.push(message);
    });
  }
}
