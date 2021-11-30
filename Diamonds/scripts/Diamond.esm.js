import { Sprite } from './Sprite.esm.js'
import { GAME_BOARD_X_OFSET, GAME_BOARD_Y_OFSET } from './Game.esm.js';

const DIAMOND_ORIGINAL_SIZE = 32;
export const DIAMOND_SIZE = 48;
export const NUMBER_OF_DIAMONDS_TYPES = 6;

const DIAMOND_ZOOM = DIAMOND_SIZE / DIAMOND_ORIGINAL_SIZE;

export class Diamond extends Sprite {
  constructor(x, y, row, column, kind, diamondSpriteImage){
    const offset = {
      x: GAME_BOARD_X_OFSET,
      y: GAME_BOARD_Y_OFSET
    }
    super(
      x, 
      y, 
      DIAMOND_ORIGINAL_SIZE, 
      DIAMOND_ORIGINAL_SIZE, 
      diamondSpriteImage, 
      NUMBER_OF_DIAMONDS_TYPES,
      offset
      );

      this.row = row;
      this.column = column;
      this.kind = kind;
      this.match = 0;
  }

  draw(){
    super.draw(this.kind, DIAMOND_ZOOM);
  }
}