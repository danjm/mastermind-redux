import React from 'react';
import FaTimesCircle from 'react-icons/fa/times-circle';
import SelectPeg from '../containers/select-peg';

const DeselectPeg = () => (<SelectPeg num={null} >
	<FaTimesCircle size={40} style={{ margin: '-5px -9px' }} />
</SelectPeg>);

export default DeselectPeg;