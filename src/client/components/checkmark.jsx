import React, { PropTypes } from 'react';
import FaCheckCircleO from 'react-icons/fa/check-circle-o';

const checkmarkStyle = {
	float: 'left',
	marginLeft: '7%',
	marginRight: '7%',
	marginTop: '4%'
};

const checkmarkColour = active => ({ color: active ? 'seagreen' : 'grey' });

const Checkmark = ({ active, submitGuess }) => <div style={checkmarkStyle}>
	<FaCheckCircleO
		style={checkmarkColour(active)}
		onClick={() => submitGuess()}
	/>
</div>;

Checkmark.propTypes = {
	submitGuess: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired
};

export default Checkmark;
