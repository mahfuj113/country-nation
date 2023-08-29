import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // let totalPopulation = 0;
    // for (const country of cart) {
    //     totalPopulation = totalPopulation + country.population
    // }
    const totalPopulation = cart.reduce((totalPopulation,cart) => totalPopulation + cart.population,0)
    return (
        <div>
            <h2>This is cart: {cart.length}</h2>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;