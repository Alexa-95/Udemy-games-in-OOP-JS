import { canvas } from './Canvas.esm.js';

export class Sprite {
  constructor(x, y, width, height, spritesImage, numberOfSprites = 1, offset = {x: 0, y: 0}){
    this.alfa = 255;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.spritesImage = spritesImage;
    this.numberOfSprites = numberOfSprites;
    this.offset = offset;
  }

  draw(numberOfSprites = 0, ratio = 1) {
    if(numberOfSprites > this.numberOfSprites){
      return;
    }
    if(this.alfa !== 255){
      canvas.context.globalAlpha = this.alfa / 255;
    }

    if(this.alpha !== 255) {
      canvas.context.globalAlpha = 1;
    }
  }
}