import React from 'react';
import { map, range } from 'lodash';
import SelectPeg from '../containers/select-peg';

const selectColumnStyle = {
	width: '45px',
	float: 'left',
	marginLeft: '5px'
};

const pegs = map(range(0, 6), num => <SelectPeg key={`'peg'${num}`} num={num} />);

const SelectColumn = () => (<div style={selectColumnStyle}>
	{pegs}
</div>);

export default SelectColumn;
