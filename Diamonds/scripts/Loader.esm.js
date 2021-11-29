import { Common } from './Common.esm.js';

const LOAD_CURRENT_ID = 'js-loading-screen-current';
const LOAD_TOTAL_ID = 'js-loading-screen-total';
const LOADER_ELEMENT_ID = 'js-loading-screen';

class Loader extends Common {
  constructor(){
    super(LOADER_ELEMENT_ID);
    this.bindToElements();
  }

  bindToElements(){
    this.currentElement = this.bindToElement(LOAD_CURRENT_ID);
    this.totalElement = this.bindToElement(LOAD_TOTAL_ID);
  }

  loadImage(imageUrl){
    this.changeVisibilityScreen(this.element, VISIBLE_SCREEN);
  }
  
}

export const loader = new Loader();