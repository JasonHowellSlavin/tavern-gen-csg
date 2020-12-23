const words = [
    // Items - Nouns
    {
        word: 'Spoon',
        type: 'noun',
        value: 2,
    },
    {
        word: 'Bucket', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Plough', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Goblet', 
        type: 'noun',
        value: 5, 
    },
    {
        word: 'Boot', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Galleon', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Flagon', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Plate', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Bowl', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Chalice', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Barrel', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Nail', 
        type: 'noun',
        value: 1, 
    },
    {
        word: 'Shovel', 
        type: 'noun',
        value: 1, 
    },
    {
        word: 'Hammer', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Sickle', 
        type: 'noun',
        value: 2, 
    },
    //Buildings
    {
        word: 'Barn', 
        type: 'noun',
        value: 1, 
    },
    {
        word: 'Tower', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Castle', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Palace', 
        type: 'noun',
        value: 5, 
    },
    // Animals 
    {
        word: 'Stag', 
        type: 'noun',
        value: 1, 
    },
    {
        word: 'Stallion', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Heffer', 
        type: 'noun',
        value: 1, 
    },
    {
        word: 'Pony', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Mongrel', 
        type: 'noun',
        value: 1, 
    },
    {
        word: 'Wolf', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Cat', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Hawk', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Lark', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Duck', 
        type: 'noun',
        value: 1, 
    },
    {
        word: 'Dove', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Raven', 
        type: 'noun',
        value: 5, 
    },
    // Magical Creatures
    {
        word: 'Griffon', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Dragon', 
        type: 'noun',
        value: 5, 
    },
    {
        word: 'Hydra', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Drake', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Golem', 
        type: 'noun',
        value: 1, 
    },
    // Plants
    {
        word: 'Lilly', 
        type: 'noun',
        value: 5, 
    },
    {
        word: 'Rose', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Oak', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Pine', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Shrub', 
        type: 'noun',
        value: 1, 
    },
    // Foods
    {
        word: 'Onion', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Mushroom', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Carrot', 
        type: 'noun',
        value: 2, 
    },
    {
        word: 'Parsnip', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Apple', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Pear', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Plum', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Grape', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Grain', 
        type: 'noun',
        value: 4, 
    },
    {
        word: 'Loaf', 
        type: 'noun',
        value: 3, 
    },
    {
        word: 'Honey', 
        type: 'noun',
        value: 5, 
    },
    // Adjectives -----------------------
    // Materials 
    {
        word: 'Onyx', 
        type: 'adjective',
        value: 4, 
    },
    {
        word: 'Wooden', 
        type: 'adjective',
        value: 1, 
    },
    {
        word: 'Crystal', 
        type: 'adjective',
        value: 4, 
    },
    {
        word: 'Iron', 
        type: 'adjective',
        value: 2, 
    },
    {
        word: 'Saphire', 
        type: 'adjective',
        value: 5, 
    },
    {
        word: 'Ruby', 
        type: 'adjective',
        value: 5, 
    },
    {
        word: 'Obsidion', 
        type: 'adjective',
        value: 5, 
    },
    {
        word: 'Gold', 
        type: 'adjective',
        value: 5, 
    },
    {
        word: 'Silver', 
        type: 'adjective',
        value: 4, 
    },
    // Color
    {
        word: 'Speckled', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'Rusty', 
        type: 'adjective',
        value: 1, 
    },
    {
        word: 'Verdant', 
        type: 'adjective',
        value: 4, 
    },
    {
        word: 'Gilded',
        type: 'adjective',
        value: 5,
    },
    {
        word: 'Piebald', 
        type: 'adjective',
        value: 2, 
    },
    {
        word: 'Blue', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'Green', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'Red', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'White', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'Black', 
        type: 'adjective',
        value: 3, 
    },
    // Personality 
    {
        word: 'Greasy',
        type: 'adjective',
        value: 1,
    },
    {
        word: 'Grinning', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'Weathered', 
        type: 'adjective',
        value: 1, 
    },
    {
        word: 'Smokey', 
        type: 'adjective',
        value: 2, 
    },
    {
        word: 'Laughing',
        type: 'adjective',
        value: 3,
    },
    {
        word: 'Dancing', 
        type: 'adjective',
        value: 5, 
    },
    {
        word: 'Snarling', 
        type: 'adjective',
        value: 2, 
    },
    {
        word: 'Crying', 
        type: 'adjective',
        value: 3, 
    },
    // Races
    {
        word: 'Dwarven', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'Elvish', 
        type: 'adjective',
        value: 4, 
    },
    {
        word: 'Orcish', 
        type: 'adjective',
        value: 3, 
    },
    {
        word: 'Gnomish', 
        type: 'adjective',
        value: 4, 
    },
    // Possesives
    {
        word: "Dragons's", 
        type: 'possesive',
        value: 5, 
    },
    {
        word: "Goblins's", 
        type: 'possesive',
        value: 1, 
    },
    {
        word: "Drunkards's", 
        type: 'possesive',
        value: 2, 
    },
    {
        word: "Tinkerer's", 
        type: 'possesive',
        value: 4, 
    },
    {
        word: "Farmers's", 
        type: 'possesive',
        value: 2, 
    },
    {
        word: "Knights's", 
        type: 'possesive',
        value: 4, 
    },
    {
        word: "Baron's", 
        type: 'possesive',
        value: 5, 
    },
    {
        word: "Spider's", 
        type: 'possesive',
        value: 3, 
    },
    {
        word: "Cat's", 
        type: 'possesive',
        value: 2, 
    },
    {
        word: "Theif's", 
        type: 'possesive',
        value: 1, 
    },
    // Owners
    {
        word: "Baern's", 
        type: 'owner',
        value: 2, 
    },
    {
        word: "Eldeth's", 
        type: 'owner',
        value: 3, 
    },
    {
        word: "Ulfgar's", 
        type: 'owner',
        value: 4, 
    },
    {
        word: "Vistra's", 
        type: 'owner',
        value: 5, 
    },
    {
        word: "Phann's", 
        type: 'owner',
        value: 2, 
    },
    {
        word: "Quarion's", 
        type: 'owner',
        value: 3, 
    },
    {
        word: "Xanaphia's", 
        type: 'owner',
        value: 4, 
    },
    {
        word: "Felosial's", 
        type: 'owner',
        value: 5, 
    },
    {
        word: "Berdied's", 
        type: 'owner',
        value: 1, 
    },
    {
        word: "Pavel's", 
        type: 'owner',
        value: 1, 
    },
    {
        word: "Cefrey's", 
        type: 'owner',
        value: 3, 
    },
    {
        word: "Marcon's", 
        type: 'owner',
        value: 5, 
    },
    {
        word: "Kriv's", 
        type: 'owner',
        value: 1, 
    },
    {
        word: "Duvamil's", 
        type: 'owner',
        value: 2, 
    },
    {
        word: "Bimpnottin's", 
        type: 'owner',
        value: 3, 
    },
    {
        word: "Dench's", 
        type: 'owner',
        value: 4, 
    },
    {
        word: "Krusk's", 
        type: 'owner',
        value: 5, 
    },
]

const templates = [
    {
        forWords: 2,
        string: 'The %a %n'
    },
    {
        forWords: 2,
        string: 'The %n & %n'
    },
    {
        forWords: 2,
        string: 'The %p %n'
    },
    {
        forWords: 2,
        string: '%o %n'
    },
    {
        forWords: 3,
        string: '%o %a %n'
    },
    {
        forWords: 3,
        string: 'The %n, %n, and %n'
    },
    {
        forWords: 3,
        string: 'The %a %n, and %n'
    },
    {
        forWords: 3,
        string: 'The %p %a %n'
    },
    {
        forWords: 4,
        string: 'The %a %n, and %a %n'
    },
    {
        forWords: 4,
        string: '%o %a %n, and %n'
    },
    {
        forWords: 4,
        string: 'The %a %n, and %a %n'
    },
    {
        forWords: 4,
        string: 'The %p %a %n and %n'
    }
];

const random = (arr) => {
    let length = arr.length;
    let index = Math.floor(Math.random() * Math.floor(length));
    
    return arr[index];
}

const wordSymbols = [
    { key: '%p', type: "possesive"},
    { key: '%n', type: "noun"},
    { key: '%a', type: "adjective"},
    { key: '%v', type: 'verb' },
    { key: '%o', type: 'owner'}
]

export { random, wordSymbols, templates };
export default words;