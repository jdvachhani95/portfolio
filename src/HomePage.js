import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Avatar } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Background from './assests/homeImage.jpg';
import AvatarImage from './assests/avatar.jpg';
import './HomePage.css';
import Skills from './Skills';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(15),
    width: theme.spacing(15),
  },
  titleName: {
    fontFamily: '"Allura", cursive',
    fontStyle: 'normal',
    fontSize: '75px',
    lineHeight: '85px',
    fontWeight: 'normal',
    color: '#1b242f',
    margin: 'auto',
    textAlign: 'center',
  },
  subTitleName: {
    fontFamily: '"Mada", sans-serif',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '35px',
    fontWeight: 'normal',
    color: '#1b242f',
    margin: 'auto',
    textAlign: 'center',
  },
  typo: {
    textAlign: 'center',
    color: '#E31B6D',
  },

  homeImage: {
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px',
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid item xs={12}>
        <section className={classes.homeImage}>
          <Avatar src={AvatarImage} className={classes.avatar} />
          <div>
            <Typography varient="h3" className={classes.titleName}>
              I'm Jaydeep
            </Typography>
            <Typography variant="h5" className={classes.subTitleName}>
              a full stack developer
            </Typography>
            <div
              className="homeWork"
              style={{
                borderRadius: '25px',
                '&:hover': { backgroundColor: '#555' },
              }}
            >
              View my work
              <ArrowForwardIcon
                className="Arrow"
                style={{
                  position: 'absolute',
                  color: 'white',
                  fontSize: '30',
                  right: '25px',
                }}
              />
            </div>
          </div>
        </section>
      </Grid>
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default HomePage;
