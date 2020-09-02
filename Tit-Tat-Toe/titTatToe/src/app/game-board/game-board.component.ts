import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  totalmoves = 9;
  playerHoveringIn: Subject<number> = new Subject();
  playerHoveringOut: Subject<number> = new Subject();
  constructor() { }

  ngOnInit(): void {
  }

  makeMove(sqaure){
    console.log(sqaure)
  }
  mouseIn(square){
    this.playerHoveringIn.next(square);
    console.log(square)
  }
  mouseOut(square){
    this.playerHoveringOut.next(square);
    console.log(square)
  }

}
