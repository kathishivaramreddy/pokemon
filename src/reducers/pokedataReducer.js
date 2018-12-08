import {FETCH_POKEMON} from "../actions/types";

const initialState = {
    pokemons : []
}

export default function(state=initialState,action) {

    switch(action.type){
        case FETCH_POKEMON:
            return {
                ...state,
                pokemons:action.payload
            }
        default:
            return state
    }

}