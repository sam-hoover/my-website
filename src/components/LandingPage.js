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
        this.defaultPageTitle = 'Hey Yah';

        this.state = {
            pageTitle: this.defaultPageTitle
        };
    }

    setPageTitle = (title) => {
        this.setState({pageTitle: title});
    };

    render() {
        const landingPageStyle = {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: colors.bgGray
        };

        const kocStyle = {
            display: 'flex',
            flexDirection: 'column',
            //alignItems: 'flex-start',
            //justifyContent: 'center',
            width: '100vw',
            fontFamily: 'Montserrat',
            fontWeight: 800,
            background: `linear-gradient(45deg, ${colors.hotPink}, blue)`
        };

        const koStyle = {
            marginLeft: '9vw',
            fontSize: '400%',
            //width: '70vw',
            //border: '2px solid white'
        };

        const linkContainerStyle = {
            marginTop: '95px',
            marginLeft: '9vw',
            //border: '2px solid white',
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
                size: 75,
                onMouseOver: () => {this.setPageTitle('Drop me a line')},
                onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
            },
            {
                fontAwesomeClass: 'fa-github-alt',
                link: links.github,
                color: colors.bgGray,
                bgColor: colors.cosmicLatte,
                style: linkStyle,
                size: 75,
                onMouseOver: () => {this.setPageTitle('Check out some code')},
                onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
            },
            {
                fontAwesomeClass: 'fa-codepen',
                link: links.codepen,
                color: colors.bgGray,
                bgColor: colors.cosmicLatte,
                style: linkStyle,
                size: 75,
                onMouseOver: () => {this.setPageTitle('Check out some code')},
                onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
            },
            {
                fontAwesomeClass: 'fa-linkedin',
                link: links.linkedin,
                color: colors.bgGray,
                bgColor: colors.cosmicLatte,
                style: linkStyle,
                size: 75,
                onMouseOver: () => {this.setPageTitle('Let\'s connect')},
                onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
            }
        ];

        return(
            <div style={landingPageStyle}>
                <KnockoutTextContainer style={kocStyle}>
                    <KnockoutText style={{...koStyle, fontSize: '900%', marginBottom: '45px'}}>
                            Hey there.
                    </KnockoutText>
                    <KnockoutText style={koStyle}>
                        I'm Sam.
                    </KnockoutText>
                    <KnockoutText style={koStyle}>
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

/*

 render() {
 const iconList = [
 {
 fontAwesomeClass: 'fa-envelope',
 link: links.email,
 color: colors.bgGray,
 bgColor: colors.cosmicLatte,
 onMouseOver: () => {this.setPageTitle('DROP ME A LINE')},
 onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
 },
 {
 fontAwesomeClass: 'fa-github-alt',
 link: links.github,
 color: colors.bgGray,
 bgColor: colors.cosmicLatte,
 onMouseOver: () => {this.setPageTitle('CHECK OUT SOME CODE')},
 onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
 },
 {
 fontAwesomeClass: 'fa-codepen',
 link: links.codepen,
 color: colors.bgGray,
 bgColor: colors.cosmicLatte,
 onMouseOver: () => {this.setPageTitle('CHECK OUT SOME CODE')},
 onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
 },
 {
 fontAwesomeClass: 'fa-linkedin',
 link: links.linkedin,
 color: colors.bgGray,
 bgColor: colors.cosmicLatte,
 onMouseOver: () => {this.setPageTitle('LET\'S CONNECT')},
 onMouseLeave: () => {this.setPageTitle(this.defaultPageTitle)}
 }
 ];

 return(
 <div className='landing-page'>
 <ParallaxTitle title={this.state.pageTitle} height='100vh' width='100vw'/>
 <IconLinkContainer
 iconList={iconList}
 style={{justifySelf: 'flex-end', marginBottom: '5vh'}}
 />
 </div>
 );
 }

 */

export default LandingPage;