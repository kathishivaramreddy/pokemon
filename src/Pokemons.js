import React from 'react';
import './Pokemons.css';

export class Pokemons extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.pokedata.pokedata.map( (pokemon,index) => <div className="pokemons">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
                <strong>{pokemon.name}</strong>
                </div>
            )

        )
    }
}