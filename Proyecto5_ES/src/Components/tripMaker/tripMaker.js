import React, { useReducer } from 'react';
import TripBuilder from '../tripBuilder/tripBuilder';
import TripSummary from '../tripSummary/tripSummary';
import { createUseStyles } from 'react-jss';

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

const useStyles = createUseStyles({
    wrapper:{
        textAlign: "center",

    },
    total:{
        textAlign: "center",
    }
})

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function getTotal(cart){
    const total = cart.reduce((totalCost, trip) => totalCost + trip.price, 0);
    return total.toLocaleString(undefined, currencyOptions);
}

function getReserva(){
    console.log("Le enviamos un mail de reserva.")
}

function cancelReserva(){
    console.log("Su reserva fue cancelada.")
}


function cartReducer(state, action){
    switch(action.type){
        case "add":
            return[...state, action.name];
        case "remove":
            const tripIndex = state.findIndex(p => p.name === action.trip.name);
            if(tripIndex < 0){
                return state;
            }
            const cart= [...state];
            cart.splice(tripIndex, 1);
            return cart
        default:
            return state;
    }
}

export default function TripMaker() {

    const [cart, setCart] = useReducer(cartReducer, []);


    function addTrip(trip){
        setCart({trip, type: "add"});
    }

    function removeTrip(trip){
        setCart({trip, type: "remove"});
    }


    const classes = useStyles();    
    return(
        <>
        <h1 className={classes.wrapper}>
            <span role="img" aria-label="viajecito">🌌🚀 </span>
            Space-Trip
            <span role="img" aria-label="viajecito"> 🛰🌌</span>
        </h1>
        <TripBuilder/>
        <button onClick={() => addTrip(trips[0])}>Promo</button>
        <button onClick={getReserva}>Reservar</button>
        <button onClick={cancelReserva}>Cancelar</button>
        <button onClick={()=>addTrip(trips[2])}>Comprar</button>
        <button onClick={()=>removeTrip(trips[2])}>Cancelar</button>
        <TripSummary/>
        <h5> items: {cart} </h5>
        <h5>precio total: $ {getTotal(cart)} </h5>
        </>
    )

}