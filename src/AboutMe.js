import React from 'react';
import PieChart from './PieChart';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Avatar } from '@material-ui/core';

//Images
import AvatarImage from './assests/avatar.jpg';
import aboutMe1 from './assests/aboutMe/aboutMe1.jpg';
import aboutMe2 from './assests/aboutMe/aboutMe2.jpg';
import aboutMe3 from './assests/aboutMe/aboutMe3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    height: theme.spacing(20),
    width: theme.spacing(20),
    margin: '0px auto',
  },
  avatarBody: {
    margin: '0px auto',
    marginTop: theme.spacing(15),
    maxWidth: '600px',
  },
  charts: {
    color: '#1b242f',
    textAlign: 'center',
    fontFamily: '"Mada", sans-serif',
    fontSize: '36px',
    margin: '0px 0px 20px',
    fontWeight: 600,
  },
  title1: {
    color: '#5e98dc',
    textAlign: 'center',
    fontFamily: '"Mada", sans-serif',
    fontSize: '36px',
    lineHeight: '54px',
    fontWeight: 'normal',
    marginTop: theme.spacing(2),
  },
  title2: {
    color: '#5e98dc',
    textAlign: 'center',
    fontFamily: '"Mada", sans-serif',
    fontSize: '65px',
    lineHeight: '84px',
    fontWeight: 600,
    marginTop: theme.spacing(2),
  },

  content: {
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#4f4f4f',
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '30px',
    // margin: '0px 0px 20px',
  },
  gridBody: {
    padding: '93px 35px',
  },
  gridImg: {
    // width: '0%',
    borderRadius: '35px',
    // height: '120%',
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  const body1 = (
    <section>
      <Typography variant="h3" className={classes.title2}>
        What I do
      </Typography>

      {/* First */}
      <Grid container className={classes.gridBody}>
        <Grid
          item
          xs={12}
          md={7}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <img
            className={classes.gridImg}
            alt="img1"
            src={aboutMe1}
            style={{ marginRight: '50px' }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h2"
            className={classes.title1}
            style={{ textAlign: 'left', marginLeft: '50px' }}
          >
            Hi
          </Typography>
          <Typography
            variant="h6"
            className={classes.content}
            style={{ textAlign: 'left', marginLeft: '50px' }}
          >
            I'm a full stack developer, living in Toronto, Canada. I have a
            passion for web developement & programming. I have 2+ years
            experience in full stak developement.
          </Typography>
        </Grid>
      </Grid>

      {/* Second */}
      <Grid container className={classes.gridBody}>
        <Grid item xs={12} md={5}>
          <Typography variant="h2" className={classes.title1}>
            Hi
          </Typography>
          <Typography variant="h6" className={classes.content}>
            I'm a full stack developer, living in Toronto, Canada. I have a
            passion for web developement & programming. I have 2+ years
            experience in full stak developement.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <img className={classes.gridImg} alt="img1" src={aboutMe2} />
        </Grid>
      </Grid>

      {/* Third */}
      <Grid container className={classes.gridBody}>
        <Grid
          item
          xs={12}
          md={7}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <img className={classes.gridImg} alt="img1" src={aboutMe3} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h2" className={classes.title1}>
            Hi
          </Typography>
          <Typography variant="h6" className={classes.content}>
            I'm a full stack developer, living in Toronto, Canada. I have a
            passion for web developement & programming. I have 2+ years
            experience in full stak developement.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );

  return (
    <div className={classes.root}>
      <Grid container style={{ justify: 'center' }}>
        <Grid item xs={12}>
          <div className={classes.avatarBody}>
            <Avatar src={AvatarImage} className={classes.avatar} />
            <Typography variant="h2" className={classes.title1}>
              Hi
            </Typography>
            <Typography variant="h6" className={classes.content}>
              I'm a full stack developer, living in Toronto, Canada. I have a
              passion for web developement & programming. I have 2+ years
              experience in full stak developement.
            </Typography>
          </div>
        </Grid>
      </Grid>
      {body1}
      <Typography variant="h3" className={classes.charts}>
        Skills Distribution
      </Typography>
      <PieChart />
    </div>
  );
};

export default AboutMe;
