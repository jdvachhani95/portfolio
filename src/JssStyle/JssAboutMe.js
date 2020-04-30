import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
