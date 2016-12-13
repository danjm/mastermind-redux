import { connect } from 'react-redux';
import { get } from 'lodash';
import ResultPeg from '../components/result-peg';

const mapStateToProps = (state, ownProps) => ({
	pegColour: get(state, `game.results.${ownProps.row}.${ownProps.num}`)
});

export default connect(mapStateToProps)(ResultPeg);
