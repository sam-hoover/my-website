import React from 'react';
import PropTypes from 'prop-types';

import IconLink from './IconLink';

function IconLinkContainer(props) {
    const containerStyle = {
        ...props.style,
        display: 'flex',
        /*alignItems: 'center',
        justifyContent: 'space-around',*/
        width: '100%',
    };

    return(
        <div style={containerStyle}>
            {
                props.iconList.map((iconProps) =>
                    <IconLink {...iconProps}/>
                )
            }
        </div>
    );
}

IconLinkContainer.defaultProps = {
    style: {},
    iconList: []
};

export default IconLinkContainer;