import React, { Component } from 'react';
import {Routes} from './Routes'
import {NavigationBar} from "./NavigationBar";
import './App.css';

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
                <h5>Hello Pokemon World</h5>
            </div>

            {/*<Routes/>*/}
        </div>
    );
  }
}

export default App;
