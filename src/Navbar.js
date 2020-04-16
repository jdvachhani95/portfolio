import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  transNavbar: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 'auto',
    textAlign: 'left',
    transition: '0.25s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 1000,
  },
  navbar: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 'auto',
    textAlign: 'left',
    transition: '0.25s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 1000,
    backgroundColor: '#1b242f',
    borderBottom: '4px solid #04c2c9',
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.3)',
  },

  wContainer: {
    height: '100%',
    // margin: '0 auto',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    '&:after': {
      content: '',
      display: 'block',
      clear: 'both',
    },
  },

  transButton: {
    transition: '0.5s',
    fontFamily: '"Mada", sans-serif',
    color: '#1b242f',
    fontSize: '20px',
    margin: '0px 20px',
    '&:hover': {
      color: '#e31b6d',
    },
  },
  button: {
    transition: '0.5s',
    fontFamily: '"Mada", sans-serif',
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

const NewNavbar = (props) => {
  const classes = useStyles();
  const [trans, setTrans] = useState(props.default === false ? false : true);
  const initialPos = useRef(window.pageYOffset);
  const changed = useRef(false);
  const navRef = useRef(null);
  const navOffset = useRef(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > initialPos.current && !changed.current) {
      changed.current = true;
      setTrans(false);
    } else if (initialPos.current === currentScrollPos && changed.current) {
      changed.current = false;
      setTrans(true);
    }
  };

  useEffect(() => {
    if (props.default === false) return;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.default]);

  useEffect(() => {
    navOffset.current = navRef.current.offsetHeight;
  }, []);

  return (
    <Fragment>
      <div
        className={trans ? classes.transNavbar : classes.navbar}
        id="1"
        ref={navRef}
      >
        <div className={classes.wContainer}>
          <div className={classes.buttonContainer}>
            <Button
              className={trans ? classes.transButton : classes.button}
              style={{ marginLeft: '80px' }}
              component={Link}
              to="/"
            >
              Home
            </Button>

            <Button
              className={trans ? classes.transButton : classes.button}
              component={Link}
              to="/skills"
            >
              Skills
            </Button>

            <Button
              className={trans ? classes.transButton : classes.button}
              component={Link}
              to="/about"
            >
              Projects
            </Button>

            <Button
              className={trans ? classes.transButton : classes.button}
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
