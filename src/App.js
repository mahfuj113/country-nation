import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries,setCountries] = useState([])
  const [cart,setCart] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>setCountries(data))
    .catch(error => console.log(error))
  }, [])
  const handleAddCountry = (country) => {
    const newCart = [...cart,country];
    setCart(newCart)
  }
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.ccn3}></Country>)
        }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
