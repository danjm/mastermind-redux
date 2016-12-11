import { connect } from 'react-redux';
import { get } from 'lodash';
import GamePeg from '../components/game-peg';
import { setPeg } from '../actions/peg-actions';

const mapStateToProps = (state, ownProps) => ({
	pegColour: get(state, `game.rows.${ownProps.row}.${ownProps.num}`)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setPeg: (clickedPeg) => { dispatch(setPeg(clickedPeg)); },
	clickedPeg: ownProps.num
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePeg);
