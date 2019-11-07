//empty grid
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

// export default function SpacingGrid() {
//   const [spacing] = React.useState(2);
//   const classes = useStyles();


//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Grid container justify="center" spacing={spacing}>
//           {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
//             <Grid key={value} item>
//               <Paper className={classes.paper} />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

// card menu css
// function Menu(){
//   return (
// <div class="row">
//     <div class="col s12 m7">
//       <div class="card">
//         <div class="card-image">
          
//           <img src={'./logo.svg'} alt="logo" />
//           <span class="card-title">Card Title</span>
//         </div>
//         <div class="card-content">
//           <p>I am a very simple card. I am good at containing small bits of information.
//           I am convenient because I require little markup to use effectively.</p>
//         </div>
//         <div class="card-action">
//           <a href="#">This is a link</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }
// export default Menu;

//fix grid
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import logo from './logo.svg';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               {/* <img className={logo.svg} alt="App-logo" src="/logo.svg" />  */}
//               <img src={logo} className="App-logo" alt="logo" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }

//try card
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

// import image from './logo.svg';
//new page
import { BrowserRouter as Router } from 'react-router-dom'
// import Slider from './Detail'

const useStyles = makeStyles({
  card: {
    // maxWidth: 345,
    align: 'center',
    maxWidth: 240,
    // maxHeight: 500,
  },
  media: {
    // align="center",
    align: 'justify',
    // align: 'center',
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    <Card className={classes.card}>
      <Typography>List Book</Typography>
      <CardActionArea>
        <CardMedia>
          {/* <img src={image} className="App-logo" alt="logo" /> */}
          <img itemprop="image" src="//covers.openlibrary.org/b/id/542870-M.jpg" class="cover" alt="Cover of: Pieces of Light | Adam Thorpe"></img>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pieces Of Light
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The incident with the gorilla remained with my mother for the rest of her life, as certain tiny wounds do on the face.
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
      <CardActions>
        <Router>
        <Button size="small" color="primary" component={Link} to='./Detail' >
          Borrow
          {/* new link */}
          {/* <ListItem button component={Link} to="/"> */}
          {/* <Redirect to="/your-new-location" push /> */}
         {/* <NavLink to="/Detail">Forgot Detail?</NavLink> */}

        </Button> 
        </Router>
        <Button size="small" color="primary">
          See Detail
        </Button>
      </CardActions>
    </Card>
  );
}
