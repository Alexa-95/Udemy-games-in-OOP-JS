import { Player } from './Player.js';
import { Deck } from './Deck.js';

class Game {
    constructor(playersCards, dealersCards, player){
        this.player = player;
        this.playersCards = playersCards;
        this.dealersCards = dealersCards;
        this.deck = new Deck();
        this.deck.shuffle();

    }
    run() {
        this.dealCards();
    }

    dealCards(){
        for(let n = 0; n < 2; n++){
			let card1 = this.deck.pickOne();
			this.player.hand.addCard(card1);
            this.playersCards.appendChild(card1.render());

            console.log(this.player.hand.cards);
        }
    }
}

const player = new Player("Ola");
const game = new Game({
    player,
	dealerPoints: document.getElementById('dealerPoints'),
	playerPoints: document.getElementById('playerPoints')
});

game.run();