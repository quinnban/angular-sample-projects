import { Player } from './player.class';

export class GameBoard {
    moves: Move[];
    players: Player[];
}




export interface Move {
    player: number;
    spot:number;
}