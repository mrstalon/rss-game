import finiteStateMachine from '../../helpers/FiniteStateMachine';

export default function fsm (state = finiteStateMachine, action) {
    switch (action.type) {
        case ('START_GAME'): {
            return {
                ...state.currentFSMstate.startGame(),
            };
        }
        case ('ASK_QUESTION'): {
            return {
                ...state.currentFSMstate.askQuestion(),
            }
        }
        case ('CAST_SPELL'): {
            return {
                ...state.currentFSMstate.chooseSpell(),
            }
        }
        case ('SHOW_STATS'): {
            return {
                ...state.currentFSMstate.showStats(),
            }
        }
        case ('END_GAME'): {
            return {
                ...state.currentFSMstate.endGame(),
            }
        }
        default: {
            return state;
        }
    }
}