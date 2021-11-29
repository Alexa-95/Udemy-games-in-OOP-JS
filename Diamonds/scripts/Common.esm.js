export const HIDDEN_CLASS = 'hidden';
export const HIDDEN_SCREEN = false;
export const VISIBLE_SCREEN = true;

export class Common {
  constructor(elementId) {
    this.element = this.bindToElement(elementId);
  }

  bindToElement(elementToFindbyId){
    const element = document.getElementById(elementToFindbyId);

    if(!element) {
      throw new Error(`Nie znaleziono elementu o Id: ${elementToFindbyId}`);
    }

    return element;
  }

	changeVisibilityScreen(element, mode) {
		mode === VISIBLE_SCREEN
			? element.classList.remove(HIDDEN_CLASS)
			: element.classList.add(HIDDEN_CLASS);
	}
}