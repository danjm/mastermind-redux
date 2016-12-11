import React, { PropTypes } from 'react';
import GamePeg from '../containers/game-peg';

const regRowStyle = {
	width: '97%',
	height: '7.4%',
	backgroundColor: '#75cbe1',
	marginLeft: '1%',
	marginRight: '1%',
	marginTop: '1%',
	paddingTop: '2px',
	paddingLeft: '2px'
};

const PegRow = ({ rowNum }) => (<div style={regRowStyle} >
	<GamePeg num={0} row={rowNum} />
	<GamePeg num={1} row={rowNum} />
	<GamePeg num={2} row={rowNum} />
	<GamePeg num={3} row={rowNum} />
</div>);

PegRow.propTypes = {
	rowNum: PropTypes.number.isRequired
};

export default PegRow;
