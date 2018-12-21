import { Observable } from 'tns-core-modules/data/observable';
import { CallBlocking } from 'nativescript-call-blocking';

export class HelloWorldModel extends Observable {
  public message: string;
  private callBlocking: CallBlocking;

  constructor() {
    super();

    this.callBlocking = new CallBlocking();
    this.message =  this.callBlocking.get();
  }
}
