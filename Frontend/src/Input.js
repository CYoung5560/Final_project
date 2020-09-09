import React from 'react';
import PropTypes from 'prop-types';
// Acknowledgements: Jordan Harrison

export default function Input(props) {

    return(
        <input value={props.value} name={props.name} type={props.type} onChange={props.changeHandler}/>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    type: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    value: ''
}