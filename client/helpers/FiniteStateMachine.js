class FiniteStateMachine {
    constructor() {
        this._states = {
            'Landing page': {
                name: 'Landing Page',
                startGame: this.startGame.bind(this),
            },
            'Choosing spell': {
                name: 'Choosing spell',
                askQuestion: this.askQuestion.bind(this),
            },
            'Asking question': {
                name: 'Asking question',
                chooseSpell: this.chooseSpell.bind(this),
                showStats: this.showStats.bind(this),
            },
            'Showing stats': {
                name: 'Showing stats',
                endGame: this.endGame.bind(this),
                startGame: this.startGame.bind(this),
            }
        }
        this.currentFSMstate = this._states['Landing page'];
    }

    startGame() {
        this.currentFSMstate = this._states['Choosing spell'];
        return this;
    }

    askQuestion() {
        this.currentFSMstate = this._states['Asking question'];
        return this;
    }

    chooseSpell() {
        this.currentFSMstate = this._states['Choosing spell'];
        return this;
    }

    showStats() {
        this.currentFSMstate = this._states['Showing stats'];
        return this;
    }

    endGame() {
        this.currentFSMstate = this._states['Landing page'];
        return this;
    }
}

const FSM = new FiniteStateMachine();

export default FSM;