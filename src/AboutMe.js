import React from 'react';
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
  title1: {
    color: '#5e98dc',
    fontFamily: '"Mada", sans-serif',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '35px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '36px',
      lineHeight: '54px',
    },
  },
  title2: {
    color: '#5e98dc',
    textAlign: 'center',
    fontFamily: '"Mada", sans-serif',
    fontSize: '50px',
    lineHeight: '65px',
    fontWeight: 'normal',
    marginTop: '40px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '65px',
      lineHeight: '84px',
      marginTop: '80px',
    },
  },

  content: {
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#4f4f4f',
    fontSize: '19px',
    lineHeight: '30px',
  },
  gridBody: {
    padding: '50px 35px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '90px 75px',
    },
  },
  middleGridBody: {
    padding: '50px 35px',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      padding: '90px 75px',
      justifyContent: 'center',
    },
  },
  leftGridImg: {
    borderRadius: '35px',
    maxWidth: '310px',
    maxHeight: '180px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '630px',
      maxHeight: '330px',
      margin: '0px auto',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '500px',
      maxHeight: '280px',
      margin: '0px 50px 0px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '730px',
      maxHeight: '430px',
      margin: '0px 100px 0px 0px',
    },
  },
  rightGridImg: {
    borderRadius: '35px',
    maxWidth: '310px',
    maxHeight: '180px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '630px',
      maxHeight: '330px',
      margin: '0px auto',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '500px',
      maxHeight: '280px',
      margin: '0px 0px 0px 50px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '730px',
      maxHeight: '430px',
      margin: '0px 0px 0px 100px',
    },
  },
  gridContentBody: {
    margin: '20px auto 0px',
    maxWidth: '500px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      margin: '20px 0px 0px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '50px 0px 0px 0px',
    },
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();
  // const matches = useMediaQuery('(min-width:600px)');

  const body1 = (
    <Grid container style={{ justify: 'center' }}>
      <Grid item xs={12}>
        <div className={classes.avatarBody}>
          <Avatar src={AvatarImage} className={classes.avatar} />
          <Typography
            variant="h2"
            className={classes.title1}
            style={{ textAlign: 'center', marginTop: '20px' }}
          >
            Hi
          </Typography>
          <Typography
            variant="h6"
            className={classes.content}
            style={{ textAlign: 'center' }}
          >
            I'm a full stack developer, living in Toronto, Canada. I have a
            passion for web developement & programming. I have 2+ years
            experience in full stak developement.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
  const body2 = (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.title2}>
          What I can do.
        </Typography>
        <div className={classes.gridBody}>
          <img className={classes.leftGridImg} alt="img1" src={aboutMe1} />
          <div className={classes.gridContentBody}>
            <Typography variant="h2" className={classes.title1}>
              Develop what you need
            </Typography>
            <Typography variant="h6" className={classes.content}>
              Host and maintain the web application on cloud plateform like AWS,
              Google cloud plateform. <br />
              Handle client side requests using graphQL or RESTful webservices.
              <br /> Handle SQL or NoSQL database.
            </Typography>
          </div>
        </div>

        {/* Second */}
        <div className={classes.middleGridBody}>
          <div className={classes.gridContentBody}>
            <Typography variant="h2" className={classes.title1}>
              Develop Front-end
            </Typography>
            <Typography variant="h6" className={classes.content}>
              Build front-end with React using material-ui lib & javascript
              frameworks. <br />
              Conceive responsive design which support all type of devices and
              offers cross-browser compatibility.
            </Typography>
          </div>
          <img className={classes.rightGridImg} alt="img1" src={aboutMe2} />
        </div>

        {/* Third */}
        <div className={classes.gridBody}>
          <img className={classes.leftGridImg} alt="img1" src={aboutMe3} />
          <div className={classes.gridContentBody}>
            <Typography variant="h2" className={classes.title1}>
              Work as a team player
            </Typography>
            <Typography variant="h6" className={classes.content}>
              Communicate effectively with team using github and slack <br />
              Work in cross-functional team
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      {body1}
      {body2}
    </div>
  );
};

export default AboutMe;
