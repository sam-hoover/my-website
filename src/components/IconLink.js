import React from 'react';
import PropTypes from 'prop-types';

class IconLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    mouseOver = () => {
        this.props.onMouseOver();
        this.setState({hover: true});
    };

    mouseLeave = () => {
        this.props.onMouseLeave();
        this.setState({hover: false});
    };

    render() {
        const containerStyle = {
            ...this.props.style,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: `${this.props.size}px`,
            width: `${this.props.size}px`,
            borderRadius: '50%',
            textDecoration: 'none',
        };

        let bgStyle = {
            position: 'absolute',
            height: `${this.props.size}px`,
            width: `${this.props.size}px`,
            borderRadius: '50%',
            backgroundColor: this.props.bgColor,
            transition: 'all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        };

        let bgHoverStyle = {
            height: '0',
            width: '0'
        };

        let iconStyle = {
            fontSize: `${this.props.size / 2}px`,
            color: this.props.color,
            zIndex: '2',
            transition: 'all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        };

        let iconHoverStyle = {
            color: this.props.bgColor,
            transform: 'scale(2) rotate(360deg)',
            //boxShadow: '0 8px 6px -6px black'
        };

        if(this.state.hover) {
            bgStyle = {...bgStyle, ...bgHoverStyle};
            iconStyle = {...iconStyle, ...iconHoverStyle};
        }

        let iconName = `fa ${this.props.fontAwesomeClass}`;

        return(
            <a
                style={containerStyle}
                onMouseOver={this.mouseOver}
                onMouseLeave={this.mouseLeave}
                onClick={() => window.location=this.props.link}

            >
                <div style={bgStyle}/>
                <div className={iconName} style={iconStyle}/>
            </a>
        );
    }
}
//href={this.props.link}

IconLink.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    fontAwesomeClass: PropTypes.string,
    link: PropTypes.string,
    onMouseOver: PropTypes.function,
    onMouseLeave: PropTypes.function
};

IconLink.defaultProps = {
    size: 35,
    color: 'black',
    bgColor: 'blue',
    fontAwesomeClass: 'fa-circle',
    link: '#',
    onMouseOver: () => {},
    onMouseLeave: () => {}
};

export default IconLink;