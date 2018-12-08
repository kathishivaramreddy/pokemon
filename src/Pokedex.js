import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemonData} from "./actions/pokemonData";
import {Pokemons} from "./Pokemons";

export class Pokedex extends React.Component {

    componentDidMount(){
        this.props.fetchPokemonData()
    }



    render(){
        console.log(this.props.pokedata)
        return(
            <div>
                <h5>Hello Pokemon</h5>
                <Pokemons pokedata={this.props.pokedata} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    pokedata : state.pokedata

})

export default connect (mapStateToProps,{fetchPokemonData})(Pokedex)