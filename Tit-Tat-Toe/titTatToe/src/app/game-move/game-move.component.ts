import { Component, OnInit, Input } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Move } from '../Classes/gameboard.class';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-game-move',
  templateUrl: './game-move.component.html',
  styleUrls: ['./game-move.component.scss']
})
export class GameMoveComponent implements OnInit {
  @Input() currentPlayer: BehaviorSubject<number>;
  @Input() playerHoverIn: Subject<number>;
  @Input() playerHoverOut: Subject<number>;
  @Input() playerMadeMove: Subject<Move>;
  @Input() boardPlace: number;
  placed = false;
  player = -1;
  hover = false;
  showO = false;
  showX = false;
  constructor() { }

  ngOnInit() {
    this.playerMadeMove.subscribe(event => {
      if (this.boardPlace === event.spot && event.player === 1) {
        this.placed = true;
        this.showO = true;
        this.hover = false;
      } else if (this.boardPlace === event.spot && event.player === 2) {
        this.showX = true;
        this.placed = true;
        this.hover = false;
      }
    });
    this.playerHoverIn.subscribe(event => {
      if (this.placed === false) {
        if (this.boardPlace === event && this.player === 1) {
          this.showO = true;
          this.hover = true;
        } else if (this.boardPlace === event && this.player === 2) {
          this.showX = true;
          this.hover = true;
        }
      }
    });
    this.playerHoverOut.subscribe(event => {
      if (this.placed === false) {
        if (this.boardPlace === event && this.player === 1) {
          this.showO = false;
          this.hover = false;
        } else if (this.boardPlace === event && this.player === 2) {
          this.showX = false;
          this.hover = false;
        }
      }
    });
    this.currentPlayer.subscribe(event => {
      this.player = event;
    });
  }

}
