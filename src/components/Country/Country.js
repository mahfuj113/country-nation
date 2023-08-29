import React from 'react';

const Country = (props) => {
    const {name,population,region,flags} = props.country
    const handleAddCountry = props.handleAddCountry
    console.log(props);
    return (
        <div>
            <h4>This is a {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;