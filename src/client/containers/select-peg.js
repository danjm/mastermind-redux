import { connect } from 'react-redux';
import Peg from '../components/peg';
import { selectPeg } from '../actions/peg-actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
	selectPeg: (selectedPeg) => { dispatch(selectPeg(selectedPeg)); },
	colourNum: ownProps.num,
	selectedPeg: ownProps.num
});

export default connect(null, mapDispatchToProps)(Peg);
