import { connect } from 'react-redux';
import { filter, get, isNumber } from 'lodash';
import Checkmark from '../components/checkmark';

const mapStateToProps = (state, ownProps) => ({
	active: filter(get(state, `game.rows.${ownProps.row}`), isNumber).length === 4
});

export default connect(mapStateToProps)(Checkmark);
