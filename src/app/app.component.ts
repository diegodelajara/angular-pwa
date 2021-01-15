import { Component } from '@angular/core';
import {SwPush} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'angular-pwa'
  // readonly VAPID_PUBLIC_KEY = "BO2fEF7s0PQqtSUKmaCHS2ECrQl3s8q0NXmD8mxxZU5PV1A6J_SvLgvHf1t3KimaaOU43mWv8E_YPlLjCUtJ3Mc";

  // constructor(
  //     private swPush: SwPush
  // ) {}

  // subscribeToNotifications() {
  //     console.log(1);
      
  //     this.swPush.requestSubscription({
  //         serverPublicKey: this.VAPID_PUBLIC_KEY
  //     })
  //     .then(sub => console.log(sub))
  //     .catch(err => console.error("Could not subscribe to notifications", err));
  // }
}

