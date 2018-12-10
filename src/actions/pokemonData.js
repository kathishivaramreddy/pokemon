import {FETCH_POKEMON,FETCH_POKEMONS_REQUEST} from "./types";

export const fetchPokemonData = () => dispatch =>  {

    dispatch({
        type: FETCH_POKEMONS_REQUEST
    })

    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(res => res.json())
        .then(pokemons => {
            let {results} = pokemons

            return dispatch({
                type:FETCH_POKEMON,
                payload:results
            })
        })

}