import React, { PropTypes } from 'react';

const pegStyle = {
	width: '36px',
	height: '36px',
	'border-radius': '50%',
	background: 'white',
	'margin-left': '2%',
	border: '1px solid black',
	float: 'left'
};

const Peg = ({ selectPeg, selectedPeg }) => {
	console.info('....................');
	console.info('selectPeg', selectPeg);
	console.info('selectedPeg', selectedPeg);
	console.info('....................');
	return <button style={pegStyle} onClick={() => { selectPeg(selectedPeg); }} />;
};

Peg.propTypes = {
	selectPeg: PropTypes.func.isRequired,
	selectedPeg: PropTypes.number.isRequired
};

export default Peg;
