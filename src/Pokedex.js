import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemonData} from "./actions/pokemonData";
import {Pokemons} from "./Pokemons";
import './Pokedex.css'

export class Pokedex extends React.Component {

    componentDidMount(){
        this.props.fetchPokemonData()
    }



    render(){
        return(
            <div className="pokemonlist">
                <h5>Welcome to Pokemon World</h5>
                <Pokemons pokedata={this.props.pokedata} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    pokedata : state.pokedata

})

export default connect (mapStateToProps,{fetchPokemonData})(Pokedex)