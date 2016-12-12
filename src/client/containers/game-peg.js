import { connect } from 'react-redux';
import { get } from 'lodash';
import Peg from '../components/peg';
import { setPeg } from '../actions/peg-actions';

const mapStateToProps = (state, ownProps) => ({
	colourNum: get(state, `game.rows.${ownProps.row}.${ownProps.num}`)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	selectPeg: (clickedPeg) => { dispatch(setPeg(clickedPeg)); },
	selectedPeg: ownProps.num
});

export default connect(mapStateToProps, mapDispatchToProps)(Peg);
