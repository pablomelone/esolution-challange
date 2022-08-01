import React from 'react';
import TripItem from '../tripItem/tripItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper:{
        display: "flex",
        flexWrap: "wrap",
        padding: [10, 50],
        justifyContent: 'center',
    },
})

const trips = [
    {
        image:"img01.jpg",
        name: "ISS",
        description: "La Estación Espacial Internadcional abre sus puertas para la visita guiada. Podra realizar cientos de experimentos divertidos bajo el efecto de la gravedad 0",
        price: 5500,
      
    },
    {
        image:"img02.jpg",
        name: "Death Star",
        description: "La famosa estrella de la muerte ha sido reconstruida, destinada a ser hotel para cualquier maleante corto de efectivo",
        price: 11500,
       
    },
    {
        image:"img03.jpg",
        name: "Star-Congress",
        description: "La Estacion Star-congress promone una nueva forma de disfrutar las clasicas convenciones espaciales, con shoppings, comercios y spa a la vuelta del sector planetario",
        price: 1500,
      
    },
];

function juancito(){
    return trips;
}

export default function TripBuilder(){
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            {trips.map((trip) => 
            <TripItem
                key={trip.name}
                image={__dirname +"images/" + trip.image}
                name={trip.name}
                description={trip.description}
                price={ "$" + trip.price}
                
                    />
            )}
        </div>
    )
}