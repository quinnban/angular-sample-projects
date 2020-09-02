import { Player } from './player.class';

export class GameBoard {
    moves: Move[];
    players: Player[];
}




interface Move {
    player: string;
    spot:number;
}