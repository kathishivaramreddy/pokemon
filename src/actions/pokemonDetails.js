import {FETCH_POKEMON_DETAILS} from "./types";

export const fetchPokemonDetails = (url) => dispatch => {

    return fetch(url)
        .then(res => res.json())
        .then(  pokemon => {

                let {types, abilities} = pokemon

                return dispatch({
                    type: FETCH_POKEMON_DETAILS,
                    types,
                    abilities
                })
            }
        )
}