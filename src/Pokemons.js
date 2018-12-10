import React from 'react';
import './Pokemons.css';
import {ImageSlider} from './ImageSlider'
import {fetchPokemonDetails} from './actions/pokemonDetails'
import {connect} from 'react-redux';

export class Pokemons extends React.Component{

    constructor(props){
        super(props);
        this.state = {display:"none",
            name:"",
            index:0
        }

    }

    onOpenModal = (name,index) => {
        this.setState({display:"block",name:name,index:index})
    };



    onCloseModal = () => {
        this.setState({display:"none"})
    }

    onClickCall = (url,name,index) => {

        this.props.fetchPokemonDetails(url)
        this.onOpenModal(name,index)
    }

    render(){
        console.log('name',this.state.name)
        console.log(this.props.pokedetails.abilities,'types')
        console.log(this.props.pokedata.pokedata,'pokedata')
        var modalStyle ={display : this.state.display}
        var pokelist = this.props.pokedata.pokedata.map( (pokemon,index) => <div className="pokemons" >
                <ImageSlider index={index+1}/>
                <strong id="myBtn" onClick={() => this.onClickCall(pokemon.url,pokemon.name,index) }>
                    {pokemon.name}</strong>
            </div>
        )
        var modal = <div className="modal" style = {modalStyle}>
            <div className="modal-content">
                <span className="close" onClick={this.onCloseModal}>&times;</span>

                {/*<div className="cols">*/}
                <div className="col1">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.state.index+1}.png`}/>
                    <p>{this.state.name}</p>
                </div>

                <div className="col2">
                    <h2>Types</h2>
                    {this.props.pokedetails.types.map( (pokemon) => <p>{pokemon.type.name}</p>)}
                </div>

                <div className="col3">
                    <h2>Abilities</h2>
                    {this.props.pokedetails.abilities.map( (pokemon) => <p>{pokemon.ability.name}</p>)}
                </div>

                {/*</div>*/}

            </div>
        </div>

        return(
            <div>
                {pokelist}
                {modal}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pokedetails : state.pokedetails
})

export default connect(mapStateToProps,{fetchPokemonDetails})(Pokemons)