import {FETCH_POKEMON,FETCH_POKEMONS_REQUEST} from "../actions/types";

const initialState = {
    pokedata : [],
    isFetching : true
}

export default function(state=initialState,action) {

    switch(action.type){
        case FETCH_POKEMONS_REQUEST :
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POKEMON:
            return {
                ...state,
                pokedata:action.payload,
                isFetching:false
            }
        default:
            return state
    }

}