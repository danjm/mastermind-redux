import React, { PropTypes } from 'react';
import { get } from 'lodash';

const colours = ['#e982ff', '#FF9800', '#00BCD4', '#5ee463', '#FFEB3B', '#ff584b'];

const pegStyle = (pegNumber, borderSize = 1) => ({
	width: '36px',
	height: '36px',
	borderRadius: '50%',
	background: get(colours, pegNumber, 'white'),
	marginLeft: '2%',
	border: `${borderSize}px solid black`,
	float: 'left'
});

const Peg = ({ selectPeg, selectedPeg, colourNum, children, borderSize }) =>
	<button
		style={pegStyle(colourNum, borderSize)}
		onClick={() => { selectPeg(selectedPeg); }}
	>{children}
	</button>;

Peg.propTypes = {
	selectPeg: PropTypes.func.isRequired,
	selectedPeg: PropTypes.number,
	children: PropTypes.element,
	colourNum: PropTypes.number,
	borderSize: PropTypes.number
};

export default Peg;
