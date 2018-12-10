import React from 'react';
import './Pokemons.css';
import {ImageSlider} from './ImageSlider'
import {fetchPokemonDetails} from './actions/pokemonDetails'
import {connect} from 'react-redux';

export class Pokemons extends React.Component{

    constructor(props){
        super(props);
        this.state = {display:"none",
            name:""
        }

    }

    onOpenModal = (name) => {
        this.setState({display:"block",name:name})
    };



    onCloseModal = () => {
        this.setState({display:"none"})
    }

    onClickCall = (url,name) => {

        this.props.fetchPokemonDetails(url)
        this.onOpenModal(name)
    }




    render(){
        console.log('name',this.state.name)
        var modalStyle ={display : this.state.display}
        var pokelist = this.props.pokedata.pokedata.map( (pokemon,index) => <div className="pokemons" >
                <ImageSlider index={index+1}/>
                <strong id="myBtn" onClick={() => this.onClickCall(pokemon.url,pokemon.name) }>
                    {pokemon.name}</strong>
            </div>
        )
        var modal = <div id="myModal" className="modal" style = {modalStyle}>
            <div className="modal-content">
                <span className="close" onClick={this.onCloseModal}>&times;</span>
                <p>{this.state.name}</p>
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