import { extend, pick } from 'lodash';
import { SELECT_PEG } from '../actions/peg-actions';
import { LOG_STATE } from '../actions/button-actions';

const initialState = {
	activeRow: 0,
	rows: [[], [], [], [], [], [], [], [], [], [], [], []],
	results: [[], [], [], [], [], [], [], [], [], [], [], []],
	selectedPeg: null
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
	case LOG_STATE:
		console.info('--------------------');
		console.info('state', state);
		console.info('--------------------');
		return state;
	case SELECT_PEG:
		return extend({}, state, pick(action, 'selectedPeg'));
	default:
		return state;
	}
};

export default gameReducer;
