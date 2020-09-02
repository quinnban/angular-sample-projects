import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-game-move',
  templateUrl: './game-move.component.html',
  styleUrls: ['./game-move.component.scss']
})
export class GameMoveComponent implements OnInit {
  @Input() showSvg: string;
  @Input() playerHoverIn: Subject<number>;
  @Input() playerHoverOut: Subject<number>;
  @Input() boardPlace: number;
  hover = false;
  showO = true;
  showX = false;
  constructor() { }

  ngOnInit() {
    this.playerHoverIn.subscribe(event => {
      if (this.boardPlace === event) {
        this.hover = true;
      } else {
        this.hover = false;
      }
    });
    this.playerHoverOut.subscribe(event => {
      if (this.boardPlace === event) {
        this.hover = false;
      }
    });
  }

}
