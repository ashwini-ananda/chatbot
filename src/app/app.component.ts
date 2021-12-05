import { Component, Directive, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'chatbot';
  img4="assets/person_elephant/COCO_train2014_000000204759.jpg";
  timeSpent: number =0;
  date: Date;
  constructor() { 
    this.date = new Date();
    setInterval(()=> {  this.timeSpent++ }, 1 * 1000);
    // setInterval(()=> {  this.timeSpent= new Date().getTime() - this.date.getTime(); }, 1 * 1000);

    //Observable.interval(1000).map(() => new Date()).subscribe(res => this.timeSpentMs = res)
    //this.time$ = Observable.interval(1000).map(() => new Date())
  }
 
  
}
