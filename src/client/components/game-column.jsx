import React from 'react';
import GamePeg from '../containers/game-peg';

const gameColumnStyle = {
	height: '550px',
	width: '275px',
	border: '1px solid black',
	float: 'left'
};

const GameColumn = () => (<div style={gameColumnStyle} >
	<GamePeg num={0} row={0} />
	<GamePeg num={1} row={0} />
	<GamePeg num={2} row={0} />
	<GamePeg num={3} row={0} />
</div>);

export default GameColumn;
