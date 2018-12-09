import {FETCH_POKEMON_DETAILS} from "../actions/types";

const initialState = {
    types:[],
    abilities:[]
}

export default function (state=initialState,action) {

    switch(action.type){
        case FETCH_POKEMON_DETAILS:
            return {
                ...state,
                types:action.types,
                abilities: action.abilities
            }
        default:
            return state;
    }
}