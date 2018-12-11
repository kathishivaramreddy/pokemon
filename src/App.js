import React, { Component } from 'react';
import {Routes} from './components/Routes'
import {NavigationBar} from "./components/NavigationBar";
import './App.css';
import Pokedex from "./components/Pokedex";

class App extends Component {
  render() {
    return (
        <div className="App">

            <div className="navbar">
                <header className="App-header">
                </header>
                <NavigationBar/>
            </div>

            <div className="main">
                <Pokedex/>
            </div>
            <br/>
            <div className="footer">
                <img className="footer-image" src={require('./images/7 .png')} alt="pokeimage"/>
            </div>

            {/*<Routes/>*/}
        </div>
    );
  }
}

export default App;
