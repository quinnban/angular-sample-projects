import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {Move} from "../Classes/gameboard.class"

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  currentPlayer :BehaviorSubject<number> = new BehaviorSubject(1);
  totalmoves = 9;
  @Output() playerMadeMove: EventEmitter<Move> = new EventEmitter();
  madeMove:Subject<Move> = new Subject();
  playerHoveringIn: Subject<number> = new Subject();
  playerHoveringOut: Subject<number> = new Subject();

  constructor() { }

  ngOnInit(): void {
    
  }

  makeMove(sqaure){
    let move: Move = {
      player: this.currentPlayer.value,
      spot: sqaure
    }
    this.madeMove.next(move);
    this.playerMadeMove.emit(move);
    console.log(sqaure)
  }
  mouseIn(square){
    this.playerHoveringIn.next(square);
  }
  mouseOut(square){
    this.playerHoveringOut.next(square);
  }

}
