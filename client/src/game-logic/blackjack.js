console.log('here');

export const sumHand = function(hand){
    let newSum = 0;
    let deckError = false;

    let handSum = hand.reduce((accum, item) => {
        if (item === 'A') {
            accum += 11;
        } else if (item >= 2 && item <= 10){
            accum += item;
        } else {
            deckError = `An incorrect value has been passed to sumHand, ${item}`;
        }

        return accum;
    }, 0); 

    // check to see if any card values were incorrect, if so, do not sum the hand
    if (typeof deckError === 'string') {
        console.log(deckError);
        return;
    }

    // recount the hand, and reduce Aces to 1 if over 21
    if (handSum > 21) {
        newSum = hand.reduce((accum, item, i) => {
            if (item === 'A' && accum > 21) {
                accum -= 10;
            }

            return accum;
        }, handSum);
    }

    if (newSum > 0) {
        return newSum;
    } else {
        return handSum;
    }
}

export const createDeck = () => {
    let deck = ['A'];

    for(let i = 2; i < 13; i++) {
        if (i < 10) {
            deck.push(i);
        } else {
            deck.push(10);
        }
    }

    return deck;
}

export const deal = (deck) => {
    let hand = [];

    for (let i = 0; i < 2; i++) {
        hand.push(deck[Math.floor(Math.random() * deck.length)]);
    }

    return hand; 
}

// takes a number, and then a series of objects, and produces and object with outcomes
// {player: Player1, sum: num, outcome: 'bust || win || lose || push'};
export const determineWinners = (dealerSum, ...playerObjs) => {
    let playerOutcomes = [];
    let bust = 'bust';
    let push = 'push';
    let lose = 'lose';
    let win = 'win';

    playerObjs.forEach((player) => {
        if (player.hasOwnProperty('player') && player.hasOwnProperty('sum')) {
            if (player.sum === dealerSum) {
                console.log('player sum equal to dealer sum');
                playerOutcomes.push({
                    player: player.player,
                    sum: player.sum,
                    outcome: push,
                });
            } else if (player.sum === 21 && dealerSum !== 21) {
                console.log('player sum 21 and dealer sum not 21');
                playerOutcomes.push({
                    player: player.player,
                    sum: player.sum,
                    outcome: win,
                });
            } else if (player.sum < 21) {
                console.log('player sum less than 21');
                if (player.sum > dealerSum && dealerSum < 21 && player.sum !== dealerSum) {
                    console.log('player sum greater than dealer sum and dealer sum less than 21');
                    playerOutcomes.push({
                        player: player.player,
                        sum: player.sum,
                        outcome: win,
                    });
                } else if (dealerSum > 21) {
                    console.log('dealer sum greater than 21');
                    playerOutcomes.push({
                        player: player.player,
                        sum: player.sum,
                        outcome: win,
                    });
                } else {
                    console.log('dealer sum should be greater than player sum');
                    playerOutcomes.push({
                        player: player.player,
                        sum: player.sum,
                        outcome: lose,
                    });
                }
            } else if (player.sum > 21) {
                playerOutcomes.push({
                    player: player.player,
                    sum: player.sum,
                    outcome: lose,
                });
            }else {
                console.log('sumes equal');
                playerOutcomes.push({
                    player: player.player,
                    sum: player.sum,
                    outcome: bust,
                })
            }
        } else {
            console.error('Player Object missing a property. Needs player, sum, and hand');
        }
    });

    return playerOutcomes;
}