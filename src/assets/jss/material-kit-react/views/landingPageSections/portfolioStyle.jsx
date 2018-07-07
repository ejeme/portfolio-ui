import { cardTitle, title } from '../../../material-kit-react';
import imagesStyle from '../../../material-kit-react/imagesStyles.jsx';

const portfolioStyle = {
  section: {
    padding: '10px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'stretch'
  },
  cardTitle,
  smallTitle: {
    color: '#6c757d'
  },
  description: {
    color: '#999'
  },
  justifyCenter: {
    justifyContent: 'center !important'
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999'
  },
  margin5: {
    margin: '5px'
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
    margin: '0 auto'
  },

  imgStyle: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    width: '200px',
    margin: '8px 25px',
    border: '2px solid grey',
    borderRadius: '3px',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    cursor: 'pointer'
  }

  /*imgStyle: {
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow:
        '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      transition: '0.1s'
    }
  }
  */
};

export default portfolioStyle;
