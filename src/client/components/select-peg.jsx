import React, { PropTypes } from 'react';

const colours = ['#e982ff', '#FFC107', '#00BCD4', '#5ee463', '#FFEB3B', '#ff584b'];

const pegStyle = pegNumber => ({
	width: '36px',
	height: '36px',
	borderRadius: '50%',
	background: colours[pegNumber],
	marginLeft: '2%',
	border: '1px solid black',
	float: 'left'
});

const Peg = ({ selectPeg, selectedPeg }) => <button
	style={pegStyle(selectedPeg)}
	onClick={() => { selectPeg(selectedPeg); }}
/>;

Peg.propTypes = {
	selectPeg: PropTypes.func.isRequired,
	selectedPeg: PropTypes.number.isRequired
};

export default Peg;
