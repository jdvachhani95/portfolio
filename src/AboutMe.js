import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Avatar } from '@material-ui/core';
import { useStyles } from './JssStyle/JssAboutMe';

//Images
import AvatarImage from './assests/avatar.jpg';
import aboutMe1 from './assests/aboutMe/aboutMe1.jpg';
import aboutMe2 from './assests/aboutMe/aboutMe2.jpg';
import aboutMe3 from './assests/aboutMe/aboutMe3.jpg';

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
            experience in full stack development.
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
              Host and maintain the web application on cloud platform like AWS,
              Google cloud platform. <br />
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
              Communicate and collaborate effectively with cross-functional team
              using tools like github and slack.
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
