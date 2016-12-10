import React, { PropTypes } from 'react';

const Button = ({ action }) => <div>
	<button onClick={action}>Log state</button>
</div>;

Button.propTypes = {
	action: PropTypes.func.isRequired,
};

export default Button;
