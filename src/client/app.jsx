import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import gameReducer from './reducers/game-reducer';
import GameColumn from './components/game-column';
import SelectColumn from './components/select-column';
import Button from './containers/button';

const store = createStore(combineReducers({
	game: gameReducer
}));

ReactDOM.render(
	<Provider store={store}>
		<div>
			<GameColumn />
			<SelectColumn />
			<Button />
		</div>
	</Provider>
	, document.querySelector('.app')
);
