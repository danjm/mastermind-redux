export const SELECT_PEG = 'SELECT_PEG';
export const SET_PEG = 'SET_PEG';
export const selectPeg = selectedPeg => ({
	type: SELECT_PEG,
	selectedPeg
});
export const setPeg = clickedPeg => ({
	type: SET_PEG,
	clickedPeg
});
