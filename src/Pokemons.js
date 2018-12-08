import React from 'react'

export class Pokemons extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.pokedata.pokedata.map( (pokemon,index) => <div>
                <li>{pokemon.name}</li>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
                {/*console.log('`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`')*/}
            </div>
            )

        )
    }
}