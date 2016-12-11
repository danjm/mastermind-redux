import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import gameReducer from './reducers/game-reducer';
import GameColumn from './components/game-column';
import SelectColumn from './components/select-column';

const store = createStore(combineReducers({
	game: gameReducer
}));

ReactDOM.render(
	<Provider store={store}>
		<div>
			<GameColumn />
			<SelectColumn />
		</div>
	</Provider>
	, document.querySelector('.app')
);
