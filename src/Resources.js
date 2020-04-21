import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, Button } from '@material-ui/core';

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

const Resources = (props) => {
  const classes = useStyles();
  // const matches = useMediaQuery('(min-width:600px)');

  const body1 = (
    <div>
      <Grid
        container
        style={{
          flexGrow: 1,
          margin: '25px 0px 100px',
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

  return <div className={classes.root}>{body1}</div>;
};

export default Resources;
