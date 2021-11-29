import { UI } from './UI.js';

export class Timer extends UI{

  #element = null;
  #interval = null;
  numberOfSecounds = 0;
  maxNumberOfSecounds = 999;

  init() {
    this.#element = this.getElement(this.UiSelectors.timer);
  }

  startTimer() {
    this.#interval = setInterval(() => this.#updateTimer(), 1000);
  }

  stopTimer() {
    clearInterval(this.#interval);
  }

  resetTimer() {
    this.numberOfSecounds = 0;
    this.#setTimerValue(this.numberOfSecounds);
    this.stopTimer();
    this.startTimer();
  }

  #updateTimer(){
    this.numberOfSecounds++;
    this.numberOfSecounds <= this.maxNumberOfSecounds ?
    this.#setTimerValue(this.numberOfSecounds) : 
    this.stopTimer();
  }

  #setTimerValue(value){
    this.#element.textContent = value;
  }

}