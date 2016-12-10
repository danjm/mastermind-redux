import { connect } from 'react-redux';
import Button from '../components/button';
import { logState } from '../actions/button-actions';

const mapDispatchToProps = dispatch => ({
	action: () => { dispatch(logState()); }
});

export default connect(null, mapDispatchToProps)(Button);
