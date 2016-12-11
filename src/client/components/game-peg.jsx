import React, { PropTypes } from 'react';
import { get } from 'lodash';

const colours = ['#e982ff', '#FFC107', '#00BCD4', '#5ee463', '#FFEB3B', '#ff584b'];

const pegStyle = pegNumber => ({
	width: '36px',
	height: '36px',
	borderRadius: '50%',
	background: get(colours, pegNumber, 'white'),
	marginLeft: '2%',
	border: '1px solid black',
	float: 'left'
});

const Peg = ({ setPeg, pegColour, clickedPeg }) => <button
	style={pegStyle(pegColour)}
	onClick={() => { setPeg(clickedPeg); }}
/>;

Peg.propTypes = {
	setPeg: PropTypes.func.isRequired,
	pegColour: PropTypes.number,
	clickedPeg: PropTypes.number
};

export default Peg;
