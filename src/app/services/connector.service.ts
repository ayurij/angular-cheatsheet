import { Injectable } from '@angular/core';
import { Observable, Subject, VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  private message: string = "hello! this is a message from connector service!"
  private numberSubject = new Subject<number>();
  private sharedNumber: number = 0;
  public numberSubject2 = new Subject<number>();
  
  constructor() { }

  getMessage(): string {
    return this.message;
  }

  getNumberObservable(): Observable<number> {
    return this.numberSubject.asObservable();
  }

  addNumber(componentNumber: number){
    this.sharedNumber += componentNumber;
    this.numberSubject.next(this.sharedNumber);
  }

  substractNumber(componentNumber: number){
    this.sharedNumber -= componentNumber;
    this.numberSubject.next(this.sharedNumber);
  }


}
