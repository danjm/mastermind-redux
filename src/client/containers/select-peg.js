import { connect } from 'react-redux';
import SelectPeg from '../components/select-peg';
import { selectPeg } from '../actions/peg-actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
	selectPeg: (selectedPeg) => { dispatch(selectPeg(selectedPeg)); },
	selectedPeg: ownProps.num
});

export default connect(null, mapDispatchToProps)(SelectPeg);
