import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from  "@material-ui/core/CardContent";
import CardMedia from  "@material-ui/core/CardMedia";
import CardActions from  "@material-ui/core/CardActions"

const styles = theme => ({
  card : {
    maxWidth: 322
  },
  media : {
    width: 322,
    height: 322
  },
  header : {
    textAlign : "center"
  }
});

const PresentingMedia = withStyles(styles)(({classes}) => (
  <Card className = {classes.card}>
    <CardMedia
      className = {classes.media}
      image = "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"
      title = "홈텔리어 매니저 전용앱 사진" 
      />
    <CardHeader
      className= {classes.header}
      title = "홈텔리어 매니저 전용앱"
      
    />  
  </Card>
  
))







export default PresentingMedia;

// const useStyles = makeStyles({
//   root: {
//     minWidth: 300,
//     height : 300
    
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
  
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     margin: 12,
//   },
// });

// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>

//         <Typography variant="h5" component="h2">
//           홈텔리어
//           <br/>
//           매니저 
//           <br /> 
//           전용 앱
//         </Typography>
//     </Card>    

//   );
// }