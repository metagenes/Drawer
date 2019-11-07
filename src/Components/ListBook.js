import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

//new page
import { BrowserRouter as Router } from 'react-router-dom'
const useStyles = makeStyles({
    card: {
      // maxWidth: 345,
      align: 'center',
      maxWidth: 240,
      // maxHeight: 500,
    },
    media: {
      // align="center",
      // align-items: 'center',
      // align: 'center',
      height: 140,
    },
  });
function Product(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
        <CardActionArea>
              <img src={props.product.imgurl}/>
            <h3>{props.product.name}</h3><br/>
            <p>Description: {props.product.description}</p>
        </CardActionArea>
        <CardActions>
        <Router>
        <Button size="small" color="primary" component={Link} to='./Detail' >
          Borrow
          </Button> 
        </Router>
        <Button size="small" color="primary">
          See Detail
        </Button>
      </CardActions>
    </Card>
    )
}

export default Product