import React, { PropTypes } from 'react';

const pegRowStyle = {
	width: '90%',
	'background-color': 'blue'
};

const PegRow = ({ action, actionLabel }) => <div style={pegRowStyle} >
	<button onClick={action}>{actionLabel}</button>
</div>;

PegRow.propTypes = {
	action: PropTypes.func.isRequired,
	actionLabel: PropTypes.string.isRequired
};

export default PegRow;
