import React from 'react';
import PropTypes from 'prop-types';

import IconLinkContainer from './IconLinkContainer';

import KnockoutTextContainer from './KnockoutTextContainer';
import KnockoutText from './KnockoutText';

import {colors, links} from './../data/SiteData';

import './../style/LandingPage.css';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageSize: 'lg'
        };
    }

    pageSize = {
        xs: 576,
        sm: 768,
        md: 998,
        lg: 1200,
        xl: 9999
    };

    componentDidMount = () => {
        window.addEventListener("resize", this.setPageSize);
    };

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.setPageSize);
    };

    getPageSize = () => {
        const pageWidth = window.innerWidth;

        if(pageWidth < this.pageSize.xs) {
            return 'xs';
        } else if(pageWidth >= this.pageSize.xs && pageWidth < this.pageSize.sm) {
            return 'sm';
        } else if(pageWidth >= this.pageSize.sm && pageWidth < this.pageSize.md) {
            return 'md';
        } else if(pageWidth >= this.pageSize.md && pageWidth < this.pageSize.lg) {
            return 'lg';
        } else {
            return 'xl';
        }
    };

    setPageSize = () => {
        const pageSize = this.getPageSize();

        if(pageSize !== this.state.pageSize) {
            this.setState({pageSize: pageSize});
        }
    };

    render() {
        let iconSize = 75;
        let koFontSize = '400%';
        let koHeaderFontSize = '900%';

        switch(this.state.pageSize) {
            case 'xs':
            case 'sm':
                iconSize = 50;
                koFontSize = '200%';
                koHeaderFontSize = '500%';
                break;
            case 'md':
                iconSize = 50;
                koFontSize = '300%';
                koHeaderFontSize = '700%';
                break;
            case 'lg':
            case 'xl':
                iconSize = 75;
                koFontSize = '400%';
                koHeaderFontSize = '900%';
                break;
        }

        const landingPageStyle = {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: colors.bgGray,
            overflow: 'hidden'
        };

        const kocStyle = {
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            fontFamily: 'Montserrat',
            fontWeight: 800,
            background: `linear-gradient(45deg, ${colors.hotPink}, blue)`
        };

        const koStyle = {
            marginLeft: '9vw',
            fontSize: koFontSize,
        };

        const linkContainerStyle = {
            marginTop: '95px',
            marginLeft: '9vw',
            backgroundColor: 'transparent'
        };

        const linkStyle = {
            marginRight: '25px'
        };

        const iconList = [
            {
                fontAwesomeClass: 'fa-envelope',
                link: links.email,
                color: colors.bgGray,
                bgColor: colors.cosmicLatte,
                style: linkStyle,
                size: iconSize
            },
            {
                fontAwesomeClass: 'fa-github-alt',
                link: links.github,
                color: colors.bgGray,
                bgColor: colors.cosmicLatte,
                style: linkStyle,
                size: iconSize
            },
            {
                fontAwesomeClass: 'fa-codepen',
                link: links.codepen,
                color: colors.bgGray,
                bgColor: colors.cosmicLatte,
                style: linkStyle,
                size: iconSize
            },
            {
                fontAwesomeClass: 'fa-linkedin',
                link: links.linkedin,
                color: colors.bgGray,
                bgColor: colors.cosmicLatte,
                style: linkStyle,
                size: iconSize
            }
        ];

        return(
            <div style={landingPageStyle}>
                <KnockoutTextContainer style={kocStyle} fallbackColor={colors.cosmicLatte}>
                    <KnockoutText
                        style={{...koStyle, fontSize: koHeaderFontSize, marginBottom: '45px'}}
                        fallbackColor={colors.cosmicLatte}
                    >
                            Hey there.
                    </KnockoutText>
                    <KnockoutText style={koStyle} fallbackColor={colors.cosmicLatte}>
                        I'm Sam.
                    </KnockoutText>
                    <KnockoutText style={koStyle} fallbackColor={colors.cosmicLatte}>
                        I solve problems & write code.
                    </KnockoutText>
                </KnockoutTextContainer>
                <IconLinkContainer
                    iconList={iconList}
                    style={linkContainerStyle}
                />
            </div>
        );
    }
}

export default LandingPage;