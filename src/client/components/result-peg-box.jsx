import React, { PropTypes } from 'react';
import ResultPeg from '../containers/result-peg';

const resultPegBoxStyle = {
	height: '36px',
	width: '36px',
	float: 'left',
	marginRight: '2%'
};

const ResultPegBox = ({ rowNum }) => (<div style={resultPegBoxStyle} >
	<ResultPeg num={0} row={rowNum} />
	<ResultPeg num={1} row={rowNum} />
	<ResultPeg num={2} row={rowNum} />
	<ResultPeg num={3} row={rowNum} />
</div>);

ResultPegBox.propTypes = {
	rowNum: PropTypes.number.isRequired
};

export default ResultPegBox;
