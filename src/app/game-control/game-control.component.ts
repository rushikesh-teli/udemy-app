import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastEmittedNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.interval = setInterval( () => {
      this.intervalFired.emit(this.lastEmittedNumber + 1);
      this.lastEmittedNumber++;
    } , 1000);
  }

  onGamePause() {
    clearInterval(this.interval);
  }
}
