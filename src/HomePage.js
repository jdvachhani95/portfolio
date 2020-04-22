import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Background from './assests/homeImage.jpg';
import './HomePage.css';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import Footer from './Footer';
import Resources from './Resources';
import SkillsChart from './SkillsChart';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#e5eaee',
    overflow: 'hidden',
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
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px',
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const resourcesRef = useRef(null);
  const scrollToResources = () => scrollToRef(resourcesRef);
  const skillsRef = useRef(null);
  const scrollToSkills = () => scrollToRef(skillsRef);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.root}>
      <Navbar
        scrollToResources={scrollToResources}
        scrollToSkills={scrollToSkills}
        scrollToTop={scrollToTop}
      />
      <Grid item xs={12}>
        <section className={classes.homeImage}>
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
              onClick={scrollToResources}
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

      <AboutMe />

      <div ref={skillsRef}>
        <SkillsChart />
      </div>
      <div ref={resourcesRef}>
        <Resources />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
