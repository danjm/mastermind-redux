import { connect } from 'react-redux';
import { filter, get, isNumber } from 'lodash';
import Checkmark from '../components/checkmark';
import { submitGuess } from '../actions/game-actions';

const mapStateToProps = (state, ownProps) => ({
	active: filter(get(state, `game.rows.${ownProps.row}`), isNumber).length === 4
});

const mapDispatchToProps = dispatch => ({
	submitGuess: () => { dispatch(submitGuess()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkmark);
