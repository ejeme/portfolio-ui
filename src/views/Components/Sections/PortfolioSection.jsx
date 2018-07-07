import React from 'react';
// @material-ui/core components

import withStyles from '@material-ui/core/styles/withStyles';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';

//click item
import ClickItem from '../../../components/ClickItem/ClickItem';

//JSON data
import Data from '../../../data.json';

import Card from '../../../components/Card/Card.jsx';
import CardBody from '../../../components/Card/CardBody.jsx';
import CardFooter from '../../../components/Card/CardFooter.jsx';

import portfolioStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/portfolioStyle.jsx';

class PortfolioSection extends React.Component {
  state = {
    data: Data
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Portfolio</h2>
        <GridContainer className={classes.container}>
          {this.state.data.map(item => (
            <ClickItem
              className={classes.imgStyle}
              key={item.id}
              id={item.id}
              url={item.url}
              image={item.image}
            />
          ))}
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(portfolioStyle)(PortfolioSection);
