import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'


//new page
import { BrowserRouter as Router } from 'react-router-dom'
const useStyles = makeStyles({
    card: {
      maxWidth: 250,
      borderRadius: 10,
      margin: 20
    },
    root: {
      flexGrow: 1
    },
 
     
  });
function Product(props) {
    const classes = useStyles();
    const [spacing] = React.useState(6);
    return (
        
        <Grid container className={classes.root} spacing={8}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>

            
        <Card className={classes.card}>
        <CardActionArea>
              <img src={props.product.imgurl} alt={props.product.id}/>
            <h3>{props.product.name}</h3><br/>
            <p>Description: {props.product.description}</p>
        </CardActionArea>
        <CardActions>
        <Router>
        <Button size="small" color="primary" component={Link} to path='./Detail' >
          Borrow
          </Button> 
        </Router>
        <Button size="small" color="primary">
          See Detail
        </Button>
      </CardActions>
    </Card>
          
    </Grid>
    </Grid>
    </Grid>
    )
}

export default Product