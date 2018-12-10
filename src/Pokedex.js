import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemonData} from "./actions/pokemonData";
import Pokemons from "./Pokemons";
import Pagination from 'react-js-pagination';
import './Pokedex.css'

export class Pokedex extends React.Component {


    componentDidMount(){

        this.props.fetchPokemonData()
    }



    render(){
        // console.log('loading',this.state.loading)
        return(<div>
            {
                this.props.pokedata.isFetching && <div className="loading"></div>
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