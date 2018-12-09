import React from 'react';
import './Pokemons.css';
import {ImageSlider} from './ImageSlider'
import {fetchPokemonDetails} from './actions/pokemonDetails'
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

export class Pokemons extends React.Component{

    constructor(props){
        super(props);
        this.state={open:false}
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    render(){
        const { open } = this.state;
        return(
            this.props.pokedata.pokedata.map( (pokemon,index) => <div className="pokemons" >
                <ImageSlider index={index+1}/>
                <strong onClick={() => this.props.fetchPokemonDetails(pokemon.url), this.onOpenModal }>{pokemon.name}</strong>
                <Modal open={open} onClose={this.onCloseModal}
                       abilities={this.props.pokedetails.abilities}>
                    <h2>Simple centered modal</h2>
                </Modal>
                </div>
            )

        )
    }
}

const mapStateToProps = (state) => ({
    pokedetails : state.pokedetails
})

export default connect(mapStateToProps,{fetchPokemonDetails})(Pokemons)