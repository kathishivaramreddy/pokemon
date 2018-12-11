import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemonData} from "../actions/pokemonData";
import Pokemons from "./Pokemons";
import './Pokedex.css'

export class Pokedex extends React.Component {


    componentDidMount(){

        this.props.fetchPokemonData()
    }

    render(){
        return(<div>
            {
                this.props.pokedata.isFetching
                &&
                <div className="loading">
                    <img className="loaderimage" src={require('../images/ping-loader.gif')}/>
                </div>
            }
            <div className="pokemonlist">
                <h3 className="heading">Welcome to Pokemon World</h3>
                <Pokemons pokedata={this.props.pokedata} />
            </div>
            </div>
            )
    }
}

const mapStateToProps = (state) => ({

    pokedata : state.pokedata

})

export default connect (mapStateToProps,{fetchPokemonData})(Pokedex)