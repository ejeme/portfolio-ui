import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import clickItemStyle from '../../assets/jss/material-kit-react/components/clickItemStyle.jsx';

function ClickItem({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    carousel,
    imgProps,
    ...rest
  } = props;
  const clickClasses = classNames({
    [classes.card]: true,
    [classes.imgProps]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return (
    <a href={props.url}>
      <img src={props.image} className={clickClasses} />
    </a>
  );
}

ClickItem.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool
};

export default withStyles(clickItemStyle)(ClickItem);
