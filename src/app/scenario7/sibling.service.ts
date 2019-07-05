import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {


  private subject = new Subject<any>();

  constructor() { }

  getMessage(): Observable<any> {
    return this.subject.asObservable();

  }

  sendMessage(message: string) {
    this.subject.next(message);

  }

}
