import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper:{
       border: "lightgray solid 1px",
       margin: 25,
       padding: 10,
       position: "relative",
       textAlign: "center",
       textTransform: "capitalize",
       width: 200,
       background: "lightblue",
    },
    description:{
        textAlign: 'justify',
        position: 'relative',
        fontSize:9,
        padding:20,

    },
    image:{
        width: 190,
    },
    price:{
        fontSize: 19,
        right: 10,
        position: 'absolute',
        bottom: 0,
    }
})




export default function TripItem({ image, name, description, price}){
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <h3>{name}</h3>
            <img className={classes.image} src={image} alt= {name}></img>
            <div className={classes.description}>
            <h4>{description}</h4></div>
            <div className={classes.price}><h5>{price}</h5></div>
            
            </div>    
    )
}

TripItem.prototype = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
}