import {FETCH_POKEMON} from "../actions/types";

const initialState = {
    pokedata : []
}

export default function(state=initialState,action) {

    switch(action.type){
        case FETCH_POKEMON:
            return {
                ...state,
                pokedata:action.payload
            }
        default:
            return state
    }

}