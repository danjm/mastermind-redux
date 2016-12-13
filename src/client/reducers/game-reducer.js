import { cloneDeep, concat, extend, filter, intersection, map, pick, random, set } from 'lodash';
import { SELECT_PEG, SET_PEG } from '../actions/peg-actions';
import { SUBMIT_GUESS } from '../actions/game-actions';

const initialState = {
	activeRow: 0,
	rows: [[], [], [], [], [], [], [], [], [], [], [], []],
	results: [[], [], [], [], [], [], [], [], [], [], [], []],
	selectedPeg: null,
	solution: [random(5), random(5), random(5), random(5)]
};

const gameReducer = (state = initialState, action) => {
	let exactMatches;
	let partialMatches;
	let activeRow;
	const nextState = cloneDeep(state);

	switch (action.type) {
	case SELECT_PEG:
		return extend({}, nextState, pick(action, 'selectedPeg'));
	case SET_PEG:
		set(nextState, `rows.${nextState.activeRow}.${action.clickedPeg}`, nextState.selectedPeg);
		return nextState;
	case SUBMIT_GUESS:
		activeRow = cloneDeep(nextState.rows[nextState.activeRow]);

		exactMatches = map(activeRow, (n, i) => nextState.solution[i] === n || n);
		partialMatches = intersection(
			filter(exactMatches, n => n !== true),
			filter(nextState.solution, (n, i) => exactMatches[i] !== true)
		);

		set(nextState, `results.${nextState.activeRow}`, concat(
			map(partialMatches, () => 0),
			map(filter(exactMatches, n => n === true), () => 1),
			map(Array(nextState.solution.length), () => 2)
		).slice(0, nextState.solution.length));

		nextState.activeRow += 1;
		return nextState;
	default:
		return nextState;
	}
};

export default gameReducer;
