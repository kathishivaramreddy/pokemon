import {FETCH_POKEMON} from "./types";

export const fetchPokemonData = () => dispatch =>  {

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