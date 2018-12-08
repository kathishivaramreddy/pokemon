import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.css';

export class NavigationBar extends React.Component {

    render(){
        return(
            <div className="navigation">
                <ul>
                    <li><Link to='pokedex'>Pokedex</Link></li>
                    <li><Link to='stats'>Stats</Link></li>
                    <li><Link to='moves'>Moves</Link></li>
                </ul>
            </div>
        )
    }
}