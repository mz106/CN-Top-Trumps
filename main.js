
const prompt = require("prompt-sync")({sigint: true}); 

let nameOne = prompt('Player one, enter your name: ');
let nameTwo = prompt('Player two, enter your name: ');

class Character {
    constructor(health, strength, agility, intelligence, mana) {
        this._health = health;
        this._strength = strength;
        this._agility = agility;
        this._intelligence = intelligence;
        this._mana = mana;
    }

    get health() {
        return this._role;
    }

    get strength() {
        return this._strength;
    }

    get agility() {
        return this._agility;
    }

    get intelligence() {
        return this._intelligence;
    }

    get mana() {
        return this._mana;
    }

    set health(par) {
        return this._health = par;
    }

    set strength(par) {
        return this._strength = par;
    }

    set agility(par) {
        return this._agility = par;
    }

    set intelligence(par) {
        return this._intelligence = par;
    }

    set mana(par) {
        return this._mana = par;
    }

    static selectAttribute() {
        const attributeArr = [this._health, this._strength, this._agility, this._intelligence, this._mana];
        const ranNum = Math.floor(Math.random() * attributeArr.length - 1);
        
        for (let i = 0; i < attributeArr.length; i++) {
            if (i === ranNum) {
                selectedAttribute = attributeArr[i];
            }
        }

        return selectedAttribute;
    }

};

class Warrior extends Character {
    constructor(type, health, strength, agility, intelligence, mana) {
        super(health, strength, agility, intelligence, mana);
        this._type = 'Warrior';
        this._health = 8;
        this._strength = 9;
        this._agility = 8;
        this._intelligence = 3;
        this.mana = 0;
    }
};

class Wizard extends Character {
    constructor(type, health, strength, agility, intelligence, mana) {
        super(health, strength, agility, intelligence, mana);
        this._type = 'Wizard';
        this._health = 6;
        this._strength = 6;
        this._agility = 8;
        this._intelligence = 10;
        this.mana = 10;
    }
};

class Scout extends Character {
    constructor(type, health, strength, agility, intelligence, mana) {
        super(health, strength, agility, intelligence, mana);
        this._type = 'Scout';
        this._health = 5;
        this._strength = 5;
        this._agility = 10;
        this._intelligence = 10;
        this.mana = 3;
    }
};

class Knight extends Character {
    constructor(type, health, strength, agility, intelligence, mana) {
        super(health, strength, agility, intelligence, mana);
        this._type = 'Knight';
        this._health = 10;
        this._strength = 10;
        this._agility = 6;
        this._intelligence = 5;
        this.mana = 0;
    }
};

class Troubadour extends Character {
    constructor(type, health, strength, agility, intelligence, mana) {
        super(health, strength, agility, intelligence, mana);
        this._type = 'Troubadour';
        this._health = 7;
        this._strength = 5;
        this._agility = 10;
        this._intelligence = 6;
        this.mana = 5;
    }
};

class Player {
    constructor(name, turn) {
        this._name = name;
        this._turn = turn;
    }

    get name() {
        return this._name;
    }

    get turn() {
        return this._turn;
    }

    set turn(par) {
        return this._turn = par;
    }

    createCard() {
        let ranNum = Math.floor(Math.random() * 4);
        if (ranNum === 0) {
            let newWarrior = new Warrior();
            return newWarrior;
        } else if(ranNum === 1) {
            let newWizard = new Wizard();
            return newWizard;      
        } else if (ranNum === 2) {
            let newScout = new Scout();
            return newScout;
        } else if(ranNum === 3) {
            let newKnight = new Knight();
            return newKnight;
        } else if(ranNum === 4) {
            let newTroubadour = new Troubadour();
            return newTroubadour;
        } 

    }
};


const playerOne = new Player(nameOne, true);
const playerTwo = new Player(nameTwo, false);

function play(par1, par2) {
    let cardOne = par1.createCard();
    let cardTwo = par2.createCard();
    console.log(cardOne)
    let keysOne = Object.keys(cardOne);
    let valuesOne = Object.values(cardOne)
    console.log(valuesOne)
    let ranNumOne = Math.floor(Math.random() * 5);
    console.log(cardOne[valuesOne[ranNumOne]], cardOne[keysOne[ranNumOne]], ranNumOne);
    
};

play(playerOne, playerTwo);

