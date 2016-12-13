import React, { PropTypes } from 'react';

const colours = ['#ffffff', '#000000', '#ff0000'];

const pegStyle = pegColour => ({
	borderRadius: '50%',
	border: '1px solid black',
	float: 'left',
	width: '15px',
	height: '15px',
	marginTop: '2%',
	marginLeft: '2%',
	background: colours[pegColour || 0]
});

const ResultPeg = ({ pegColour }) => <button style={pegStyle(pegColour)} />;

ResultPeg.propTypes = { pegColour: PropTypes.number };

export default ResultPeg;
