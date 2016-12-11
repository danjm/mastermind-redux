import { cloneDeep, extend, pick, set } from 'lodash';
import { SELECT_PEG, SET_PEG } from '../actions/peg-actions';
import { LOG_STATE } from '../actions/button-actions';

const initialState = {
	activeRow: 0,
	rows: [[], [], [], [], [], [], [], [], [], [], [], []],
	results: [[], [], [], [], [], [], [], [], [], [], [], []],
	selectedPeg: null
};

const gameReducer = (state = initialState, action) => {
	const nextState = cloneDeep(state);

	switch (action.type) {
	case LOG_STATE:
		console.info('--------------------');
		console.info('nextState', nextState);
		console.info('--------------------');
		return nextState;
	case SELECT_PEG:
		return extend({}, nextState, pick(action, 'selectedPeg'));
	case SET_PEG:
		set(nextState, `rows.${nextState.activeRow}.${action.clickedPeg}`, nextState.selectedPeg);
		return nextState;
	default:
		return nextState;
	}
};

export default gameReducer;
