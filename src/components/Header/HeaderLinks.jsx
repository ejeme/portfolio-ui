/*eslint-disable*/
import React, { Component } from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CardTravel, Face, Email, Palette } from '@material-ui/icons';

// core components
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown.jsx';
import Button from '../../components/CustomButtons/Button.jsx';

import headerLinksStyle from '../../assets/jss/material-kit-react/components/headerLinksStyle.jsx';
import componentsStyle from '../../assets/jss/material-kit-react/views/components.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() =>
            scrollToComponent(props.About, {
              offset: 0,
              align: 'top',
              duration: 1500
            })
          }
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Face className={classes.icons} /> About
        </Button>
        <Button
          href="/skills"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Palette className={classes.icons} /> Skills
        </Button>
        <Button
          href="/portfolio"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CardTravel className={classes.icons} /> Portfolio
        </Button>
        <Button
          href="/contact"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Email className={classes.icons} /> Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="git-hub"
          title="Follow me on Git-hub"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/ejeme"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-github-alt'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/aramide.ogedengbe"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/aramideogedengbe/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
