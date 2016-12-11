import { connect } from 'react-redux';
import PegRow from '../components/peg-row';

const mapStateToProps = (state, ownProps) => ({
	rowNum: ownProps.rowNum
});

export default connect(mapStateToProps)(PegRow);
