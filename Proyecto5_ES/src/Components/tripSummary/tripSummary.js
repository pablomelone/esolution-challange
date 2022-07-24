import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper:{
       borderTop: "black solid 1px",
       padding: "0 20px 0 20px",
       display: "flex",
    }
})

export default function TripSummary(){
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <h2> Compra: </h2>
        </div>
    )
}