import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import InfoArea from '../../../components/InfoArea/InfoArea.jsx';

import productStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>About</h2>
            <h3 className={classes.description}>
              My name is Ejeme. I am a full stack web developer who loves
              physics and math. I actually graduated as a Doctor of Optometry
              from the University of Benin, but my love is much bigger than
              staring into peoples’ eyes all day. I think I prefer to deal with
              numbers, which I’m pretty good at. When I’m not coding, I love
              spending time cooking, working out, or just hanging out with my
              three boys.
            </h3>
            <h3 className={classes.description}>
              I have also had the opportunity to be an entrepreneur, which was
              very awesome. I started a plastics recycling plant in Lagos,
              Nigeria with a goal to reduce the amount of waste that made its
              way into the ecosystem without being recycled properly. It was
              quite awesome turning waste material into raw material for further
              plastics production. I sold the business for a handsome fee when I
              had ramped up sales and started turning a profit.
            </h3>
            <h3 className={classes.description}>
              Now I’m ready for my next conquest. I’m ready to work on your next
              project and deliver superior quality deliverables that will also
              ramp up your sales and improve your productivity.
            </h3>
          </GridItem>
        </GridContainer>
        <div />
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
