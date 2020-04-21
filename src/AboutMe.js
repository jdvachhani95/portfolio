import React from 'react';
import PieChart from './PieChart';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Avatar, Paper, Button } from '@material-ui/core';
import { Element } from 'react-scroll';

//Images
import AvatarImage from './assests/avatar.jpg';
import aboutMe1 from './assests/aboutMe/aboutMe1.jpg';
import aboutMe2 from './assests/aboutMe/aboutMe2.jpg';
import aboutMe3 from './assests/aboutMe/aboutMe3.jpg';

//Icons
import mediumIcon from './assests/Icons/mediumIcon.png';
import resumeIcon from './assests/Icons/resumeIcon.png';
import projectIcon from './assests/Icons/projectIcon.png';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PublicIcon from '@material-ui/icons/Public';

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
  paper: {
    height: 350,
    width: 275,
    // backgroundColor: '#e8e8ed',
    textAlign: 'center',
    padding: theme.spacing(5),
  },
  cardHeading: {
    fontFamily: '"Mada", sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '36px',
    color: '#000000',
    marginTop: '20px',
  },
  cardContent: {
    fontFamily: 'sans-serif',
    marginTop: '10px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#4f4f4f',
    fontSize: '19px',
    lineHeight: '30px',
  },
  cardButton: {
    fontFamily: 'sans-serif',
    margin: theme.spacing(1),
    padding: '2px 27px',
    textTransform: 'none',
    fontSize: '19px',
    borderRadius: '25px',
    color: '#5e98dc',
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

  const body3 = (
    <Grid
      item
      xs={12}
      style={{
        justifyContent: 'center',
        maxWidth: '600px',
        margin: '0px auto',
      }}
    >
      <Typography variant="h3" className={classes.charts}>
        Skills I' good at.
      </Typography>
      <Element id="skills-component" name="skills-component">
        <PieChart />
      </Element>
    </Grid>
  );

  const body4 = (
    <div>
      <Grid
        container
        style={{
          flexGrow: 1,
          margin: '25px 0px',
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            className={classes.title2}
            style={{ margin: '30px 0px' }}
          >
            Resources
          </Typography>
          <Grid container justify="center" spacing={4}>
            <Grid key={4} item>
              <Paper className={classes.paper}>
                <img alt="resume" src={resumeIcon} />
                <Typography varient="h5" className={classes.cardHeading}>
                  Resume
                </Typography>
                <Typography variant="h6" className={classes.cardContent}>
                  Get more information about my work experience & education.
                </Typography>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  endIcon={<CloudDownloadIcon />}
                  className={classes.cardButton}
                  size="large"
                >
                  download
                </Button>
              </Paper>
            </Grid>

            <Grid key={4} item>
              <Paper className={classes.paper}>
                <img
                  alt="medium"
                  src={mediumIcon}
                  className={classes.cardLogo}
                />
                <Typography varient="h5" className={classes.cardHeading}>
                  Blogs
                </Typography>
                <Typography variant="h6" className={classes.cardContent}>
                  Visit the blogs i have written on medium.com
                </Typography>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  endIcon={<AssignmentIcon />}
                  className={classes.cardButton}
                  size="large"
                >
                  visit blog
                </Button>
              </Paper>
            </Grid>
            <Grid key={4} item>
              <Paper className={classes.paper}>
                <img
                  alt="project"
                  src={projectIcon}
                  className={classes.cardLogo}
                />
                <Typography varient="h5" className={classes.cardHeading}>
                  Projects
                </Typography>
                <Typography variant="h6" className={classes.cardContent}>
                  Explore the projects i made so far.
                </Typography>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  endIcon={<PublicIcon />}
                  className={classes.cardButton}
                  size="large"
                >
                  Website
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div className={classes.root}>
      {body1}
      {body2}
      {body3}
      {body4}
    </div>
  );
};

export default AboutMe;
