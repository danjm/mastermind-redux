import { connect } from 'react-redux';
import PegRow from '../components/peg-row';

const mapStateToProps = (state, ownProps) => ({
	activeRow: state.game.activeRow,
	rowNum: ownProps.rowNum
});

export default connect(mapStateToProps)(PegRow);
