import React from 'react';
import { map, range } from 'lodash';
import PegRow from '../containers/peg-row';

const gameColumnStyle = {
	height: '550px',
	width: '275px',
	border: '1px solid black',
	float: 'left'
};

const pegRows = map(range(0, 12), num => <PegRow key={`'pegRow'${num}`} rowNum={num} />);

const GameColumn = () => (<div style={gameColumnStyle} >
	{pegRows}
</div>);

export default GameColumn;
