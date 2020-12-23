import React, { Component } from 'react';
import Table from './Table';
import './BlackJack.scss';
import { sumHand, createDeck, deal, determineWinners } from '../../game-logic/blackjack';
import { connect } from 'react-redux';

class BlackJack extends Component{
    constructor(props) {
        super(props);
        this.state = {
            gameLog: ['Please press start to start the game'],
            fullLog: [],
            dealerHand: [],
            playerHand: [],
            deck: [],
        };
        this.start = this.start.bind(this);
        this.createLog = this.createLog.bind(this);
        this.hit = this.hit.bind(this);
        this.stay = this.stay.bind(this);
        this.playerHit = this.playerHit.bind(this);
    }

    hit (targetHand, name) {
        let hand = this.state[targetHand].slice();
        console.log('hand', hand);

        let card = this.state.deck[Math.floor(Math.random() * this.state.deck.length)];
        console.log('card', card);

        hand.push(card);

        let handSum = sumHand(hand);

        let string = `${name} drew a ${card}. ${name}'s hand sum is ${handSum}.`;
   
        let currentGameLog = this.createLog(true, string);

        return {hand: hand, currentGameLog: currentGameLog};
    }

    playerHit () {
        let playerHits = this.hit('playerHand', 'player')

        this.setState({
            playerHand: playerHits.hand,
            gameLog: playerHits.currentGameLog
        })
    }

    checkWinCondition(dealerSum, ...playerHands) {
        let gameObj = {outcomeString: ''}

        let winningHands = playerHands.filter((hand) => {
            console.log(hand, hand.sum, dealerSum, 'this is the hand', console.log(hand.sum <= 21 && hand.sum > dealerSum || dealerSum > 21));
            if (hand.sum <= 21 && hand.sum > dealerSum || dealerSum > 21) {
                console.log('in if');
                return true;
            }
        });

        console.log('checkWin', winningHands);
    
        if (winningHands.length > 0) {
            winningHands.forEach((hand) => {
                console.log(`winner: ${hand.player} with hand ${hand.sum} over the dealers ${dealerSum}`);
            });
        } else {
            // do something
        }
    }

    stay() {
        let dealerHand = this.state.dealerHand;
        let playerHand = this.state.playerHand;

        let dealerSum = sumHand(dealerHand);
        let playerSum = sumHand(playerHand);
        let dealerAfterHit = 0;

        console.log('Dealer has ', dealerSum);

        if (dealerSum <= 16 && dealerSum !== 21 && dealerSum <= playerSum) {
            while (dealerAfterHit < 21 && dealerAfterHit < playerSum) {
                let card = this.state.deck[Math.floor(Math.random() * this.state.deck.length)];

                dealerHand.push(card);
                dealerAfterHit = sumHand(dealerHand);
            }
        }

        let string;

        if (dealerAfterHit > 0) {
            string = `The sum of hands is, player: ${playerSum}, dealer's hand: ${dealerHand}, and sum: ${dealerAfterHit}`;
            console.log(determineWinners(dealerAfterHit, {player: 'Player 1', sum: playerSum}))
        } else {
            string = `The sum of hands is, player: ${playerSum}, dealer's hand: ${dealerHand}, and sum: ${dealerSum}`;
            console.log(determineWinners(dealerSum, {player: 'Player 1', sum: playerSum}))
        }

        let currentGameLog = this.createLog(true, string);

        this.setState({
            dealerHand: dealerHand,
            gameLog: currentGameLog,
        })

    }

    createLog(full, ...args) {
        let currentGameLog = full ? this.state.gameLog.slice() : [];

        args.forEach((arg) => {
            currentGameLog.push(arg);
        })

        return currentGameLog;
}

    start() {
        let deck = this.state.deck.slice();
        let playerHand = deal(deck);
        let dealerHand = deal(deck);
        let dealerString = `The dealer has a ${dealerHand[0]} showing.`;
        let playerString = `You have a ${playerHand[0]}, and ${playerHand[1]}. Hit or Stay?`;

        let gameLog = this.createLog(true, dealerString, playerString);
        let currentGameLog = this.createLog(false, dealerString, playerString);

        this.setState({
            dealerHand: dealerHand,
            playerHand: playerHand,
            fullLog: gameLog,
            gameLog: currentGameLog
        })
    }

    componentDidMount() {
        let deck = createDeck();

        this.setState({
            deck: deck
        });
    }

    render(){
        return(
            <section className={"table"}>
                <Table gameLog={this.state.gameLog} />
                <button onClick={() => {this.start()}}>Start</button>
                <button onClick={() => {this.playerHit()}}>Hit</button>
                <button onClick={() => {this.stay()}}>Stay</button>
            </section>
        )
    }
}

export default BlackJack;