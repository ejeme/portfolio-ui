import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Button from '../../components/CustomButtons/Button.jsx';
import Parallax from '../../components/Parallax/Parallax.jsx';
import HeaderLinks from '../../components/Header/HeaderLinks.jsx';

import componentsStyle from '../../assets/jss/material-kit-react/views/components.jsx';
import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage';

// Sections for this page
import ProductSection from './Sections/ProductSection.jsx';
import SkillsSection from './Sections/SkillsSection.jsx';
import TeamSection from './Sections/TeamSection.jsx';
import WorkSection from './Sections/WorkSection.jsx';
import PortfolioSection from './Sections/PortfolioSection';
import Test from './testscroll';

class Home extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          href="/"
          brand=""
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: '#37474F'
          }}
          {...rest}
        >
          <Button
            onClick={() =>
              scrollToComponent(this.About, {
                offset: 0,
                align: 'top',
                duration: 1500
              })
            }
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            /> About
          </Button>
        </Header>
        <Parallax image={require('../../assets/img/ejeme-2.JPG')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Ejeme Ogedengbe</h1>
                  <h3 className={classes.subtitle}>Full Stack Web Developer</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection
              className="about"
              ref={ProductSection => {
                this.About = ProductSection;
              }}
            />
            <SkillsSection />
            <PortfolioSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Home);
