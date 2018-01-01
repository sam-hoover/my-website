import React from 'react';
import PropTypes from 'prop-types';

function KnockoutText(props) {
    const {style, fallbackColor, ...otherProps} = {...props};

    const koStyle = {
        margin: 0,
        padding: 0,
        ...style,
        color: fallbackColor,
        webkitTextFillColor: 'transparent',
        webkitBackgroundClip: 'text',
    };

    return(
        <p style={koStyle} {...otherProps}>{props.children}</p>
    );
}

KnockoutText.propsTypes = {
    fallbackColor: PropTypes.string
};

KnockoutText.defaultProps = {
    fallbackColor: 'black',
    style: {}
};

export default KnockoutText;