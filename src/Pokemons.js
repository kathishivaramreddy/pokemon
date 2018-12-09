import React from 'react';
import './Pokemons.css';
import {ImageSlider} from './ImageSlider'
import {fetchPokemonDetails} from './actions/pokemonDetails'
import {connect} from 'react-redux';

export class Pokemons extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.pokedata.pokedata.map( (pokemon,index) => <div className="pokemons" >
                <ImageSlider index={index+1}/>
                <strong onClick={() => this.props.fetchPokemonDetails(pokemon.url)}>{pokemon.name}</strong>
                </div>
            )

        )
    }
}

const mapStateToProps = (state) => ({
    pokedetails : state.pokedetails
})

export default connect(mapStateToProps,{fetchPokemonDetails})(Pokemons)