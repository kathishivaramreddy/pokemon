import React from 'react';
import {Route} from 'react-router-dom';
import {Pokedex} from './Pokedex';

export const Routes = () => {

    return(
        <div>
            <Route exact path = '/pokedex' component={Pokedex}/>
            <Route exact path = '/stats' component={Pokedex}/>
            <Route exact path = '/moves' component={Pokedex}/>
        </div>
    )
}