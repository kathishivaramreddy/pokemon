import React from 'react';
import './Pokemons.css';
import {ImageSlider} from './ImageSlider'

// ReactModal.setAppElement('#root')

export class Pokemons extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.pokedata.pokedata.map( (pokemon,index) => <div className="pokemons" >
                <ImageSlider index={index+1}/>
                <strong>{pokemon.name}</strong>
                </div>
            )

        )
    }
}