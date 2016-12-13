import React, { PropTypes } from 'react';
import GamePeg from '../containers/game-peg';
import Checkmark from '../containers/checkmark';
import ResultPegBox from '../components/result-peg-box';

const pegRowStyle = isActive => ({
	width: isActive ? '96%' : '97%',
	height: '7.4%',
	backgroundColor: '#75cbe1',
	marginLeft: '1%',
	marginRight: '1%',
	marginTop: '1%',
	paddingTop: '2px',
	paddingLeft: '2px',
	border: isActive ? '2px solid #FF9800' : '0px'
});

const PegRow = ({ activeRow, rowNum }) => (<div style={pegRowStyle(activeRow === rowNum)} >
	<GamePeg num={0} row={rowNum} />
	<GamePeg num={1} row={rowNum} />
	<GamePeg num={2} row={rowNum} />
	<GamePeg num={3} row={rowNum} />
	<Checkmark row={rowNum} />
	<ResultPegBox rowNum={rowNum} />
</div>);

PegRow.propTypes = {
	activeRow: PropTypes.number.isRequired,
	rowNum: PropTypes.number.isRequired
};

export default PegRow;
