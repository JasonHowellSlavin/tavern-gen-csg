import React, { Component } from 'react';
import './Tavern.scss';
import words, {random, wordSymbols, templates } from '../../utility/names';
import formality from '../../utility/descriptors';
import { connect } from 'react-redux';

class Tavern extends Component{
    constructor(props) {
        super(props);
        this.state = {
            adjective: [],
            noun: [],
            possesive: [],
            words: [],
            random: random,
            wordSymbols: wordSymbols,
            tavernName: '',
            templates: [],
            tavernFormality: '',
        };
        this.createTavern = this.createTavern.bind(this);
        this.retrieveType = this.retrieveType.bind(this);
        this.createWordArray = this.createWordArray.bind(this);
    }

    getFormalityString(scoreArray) {
        let arr = scoreArray.slice();
        let formalityItems = formality.slice();

        let scoreAvg = Math.round(arr.reduce((accum, num) => {
            return accum + num;
        }, 0) / arr.length);

        let selection = formalityItems.filter((item) => item.formality === scoreAvg);

        return random(selection).description;
    }

    createWordArray(str) {
        let wordArray = [];
        let stringFromArr = str.split(' ');

        stringFromArr.forEach((word, i) => {
            if (this.retrieveType(word)) {
                wordArray.push({
                    key: this.retrieveType(word),
                    symbol: word.slice(0, 2),
                    index: i,
                });
            }
        })

        return wordArray;
    }

    retrieveType(symbol) {
        let wordKey = wordSymbols.filter((item) => {
            // Check for punctiation
            if (symbol.indexOf('%') > -1 && symbol.length > 2) {
                return item.key === symbol.slice(0, 2);
            }

            return item.key === symbol.slice(0, 2);
        })

        if (wordKey.length) {
            return wordKey[0].type;
        }

        return false;
    }

    createTavern() {
        let templates = this.state.templates.slice();
        let chosenTemplate = random(templates);
        let wordArray = this.createWordArray(chosenTemplate.string);
        let finalString = chosenTemplate.string.slice();
        let dupeArray = [];
        let formalityScore = [];

        wordArray.forEach((word) => {
            let randomSelection = random(this.state[word.key]);
            let randomWord = randomSelection.word;

            if (dupeArray.includes(randomWord) === false) {
                dupeArray.push(randomWord);
            } else {
                while(dupeArray.includes(randomWord)) {
                    randomWord = random(this.state[word.key]).word;
                }
            }

            formalityScore.push(randomSelection.value);
            finalString = finalString.replace(word.symbol, randomWord);
        })

        let formalityString = this.getFormalityString(formalityScore);
        this.setState({tavernName: finalString, tavernFormality: formalityString});
        return finalString;
    }

    componentDidMount() {

        let noun = words.filter((word) => word.type === 'noun');
        let adjective = words.filter((word) => word.type === 'adjective');
        let possesive = words.filter((word) => word.type === 'possesive');
        let owner = words.filter((word) => word.type === 'owner')

        this.setState({
            noun: noun, 
            adjective: adjective, 
            possesive: possesive,
            owner: owner,
            word: words,
            formality: formality,
            templates: templates,
        })
    }

    render(){
        return(
            <section className={"tavern-container"}>
                <section className={"tavern"}> 
                    <div className={"info"}>
                        <h1>Tavern Name Generator</h1>
                        <p>Click to generate a tavern name, and how formal it is!</p>
                    </div>
                    <div className={"display"}>
                        <h3>{this.state.tavernName}</h3>
                        <p>{this.state.tavernFormality}</p>
                    </div>
                    
                    <button onClick={() => this.createTavern()}>Click Me</button>
                </section>
            </section>
        )
    }
}

export default Tavern;