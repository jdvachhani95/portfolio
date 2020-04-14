import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  navbar: {
    width: '100%',
    height: '50px',
    position: 'absolute',
    left: 0,
    right: 0,
    borderBottom: '4px solid #04c2c9',
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.3)',
    textAlign: 'left',
    transition: '0.5s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flexEnd',
    zIndex: 99,
    backgroundColor: '#1b242f',
  },

  wContainer: {
    height: '100%',
    margin: '0 auto',
    alignItems: 'right',
    '&:after': {
      content: '',
      display: 'block',
      clear: 'both',
    },
    backgroundColor: '#1b242f',
  },

  button: {
    transition: '0.5s',
    fontFamily:
      'brandon-grotesque,HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif',
    color: 'white',
    fontSize: '20px',
    margin: '0px 20px',
    '&:hover': {
      color: '#e31b6d',
    },
  },

  buttonContainer: {
    height: '50px',
    float: 'left',
    justifyContent: 'center',
    alignItems: 'center',
  },

  center: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const NewNavbar = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={classes.wContainer}>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              style={{ marginLeft: '80px' }}
              component={Link}
              to="/"
            >
              Home
            </Button>

            <Button className={classes.button} component={Link} to="/skills">
              Skills
            </Button>

            <Button className={classes.button} component={Link} to="/about">
              Projects
            </Button>

            <Button
              className={classes.button}
              component={Link}
              to="/contact/514"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewNavbar;
