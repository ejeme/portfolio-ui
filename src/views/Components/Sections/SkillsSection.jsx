import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Html from '../../../assets/img/icons/html-5.png';
import Css from '../../../assets/img/icons/css-3.png';
import Javascript from '../../../assets/img/icons/javascript.png';
import Nodejs from '../../../assets/img/icons/nodejs.png';
import Express from '../../../assets/img/icons/express.png';
import Mysql from '../../../assets/img/icons/mysql.png';
import Mongodb from '../../../assets/img/icons/mongodb.png';
import react from '../../../assets/img/icons/react.png';
import Heroku from '../../../assets/img/icons/heroku.png';
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import InfoArea from '../../../components/InfoArea/InfoArea.jsx';

import skillsStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/skillsStyle.jsx';
import SvgIcon from '@material-ui/icons/Chat';

class SkillsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Skills</h2>
        <GridContainer className={classes.grdcontainer}>
          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Html} alt="html-icon" width="50" />
            <h4 className={classes.body}>HTML5</h4>
            <p className={classes.description}>
              HyperText Markup Language, the authoring language used to create
              documents on the World Wide Web.{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Css} alt="css-icon" width="50" />
            <h4 className={classes.body}>CSS3</h4>
            <p className={classes.description}>
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML.{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Javascript} alt="javascript-icon" width="50" />
            <h4 className={classes.body}>Javascript</h4>
            <p className={classes.description}>
              JavaScript is a programming language developed to add dynamic and
              interactive elements to websites.{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Nodejs} alt="nodejs-icon" width="100" />
            <h4 className={classes.body}>NodeJS</h4>
            <p className={classes.description}>
              Node.js (Node) is an open source development platform for
              executing JavaScript code server-side. Node is useful for
              developing applications that require a persistent connection from
              the browser to the server.{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Express} alt="express-icon" width="150" />
            <h4 className={classes.body}>Express</h4>
            <p className={classes.description}>
              Express is a web application framework for Node.js, designed for
              building web applications and APIs.{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Mysql} alt="mysql-icon" width="80" />
            <h4 className={classes.body}>MySQL</h4>
            <p className={classes.description}>
              MySQL is an open source relational database management system
              (RDBMS) based on Structured Query Language (SQL).{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Mongodb} alt="mongodb-icon" width="200" />
            <h4 className={classes.body}>MongoDB</h4>
            <p className={classes.description}>
              MongoDB is a NoSQL database is built on an architecture of
              collections and documents, instead of using tables and rows as in
              relational databases.{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={react} alt="react-icon" width="50" />
            <h4 className={classes.body}>React</h4>
            <p className={classes.description}>
              React is a JavaScript library for building user interfaces, and is
              maintained by Facebook and a community of individual developers
              and companies.{' '}
            </p>
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.grditem}>
            <img src={Heroku} alt="heroku-icon" width="50" />
            <h4 className={classes.body}>Heroku</h4>
            <p className={classes.description}>
              Heroku is a cloud platform as a service (PaaS) that lets
              developers build, run and scale applications in a similar manner
              across all programming languages.{' '}
            </p>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(skillsStyle)(SkillsSection);
