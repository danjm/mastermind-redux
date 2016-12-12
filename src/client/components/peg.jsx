import React, { PropTypes } from 'react';
import { get } from 'lodash';

const colours = ['#e982ff', '#FFC107', '#00BCD4', '#5ee463', '#FFEB3B', '#ff584b'];

const pegStyle = pegNumber => ({
	width: '36px',
	height: '36px',
	borderRadius: '50%',
	background: get(colours, pegNumber, 'white'),
	marginLeft: '2%',
	border: `${pegNumber === null ? 0 : 1}px solid black`,
	float: 'left'
});

const Peg = ({ selectPeg, selectedPeg, colourNum, children }) =>
	<button
		style={pegStyle(colourNum)}
		onClick={() => { selectPeg(selectedPeg); }}
	>{children}
	</button>;

Peg.propTypes = {
	selectPeg: PropTypes.func.isRequired,
	selectedPeg: PropTypes.number,
	children: PropTypes.element,
	colourNum: PropTypes.number
};

export default Peg;
