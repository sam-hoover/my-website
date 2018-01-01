import React from 'react';
import PropTypes from 'prop-types';

function KnockoutTextContainer(props) {
    const {style, fallbackColor, ...otherProps} = {...props};

    const koStyle = {
        background: 'linear-gradient(45deg, red, blue)',
        ...style,
        backgroundAttachment: 'fixed',
        color: fallbackColor,
        webkitTextFillColor: 'transparent',
        webkitBackgroundClip: 'text'
    };

    return(
        <div style={koStyle} {...otherProps}>
            {props.children}
        </div>
    );
}

KnockoutTextContainer.propTypes = {
    fallbackColor: PropTypes.string,
};

KnockoutTextContainer.defaultProps = {
    fallbackColor: 'black',
    style: {}
};

export default KnockoutTextContainer;