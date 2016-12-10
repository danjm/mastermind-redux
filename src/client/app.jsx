import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import gameReducer from './reducers/game-reducer';
import Peg from './containers/peg';
import Button from './containers/button';

const store = createStore(combineReducers({
	game: gameReducer
}));

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Peg num={2} />
			<Peg num={3} />
			<Peg num={4} />
			<Button />
		</div>
	</Provider>
	, document.querySelector('.app')
);
