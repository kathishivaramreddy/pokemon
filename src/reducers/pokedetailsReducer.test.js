import { FETCH_POKEMON_DETAILS} from "../actions/types";
import pokedetailsReducer from './pokedetailsReducer'

const initialState = {
    types :[],
    abilities:[]
}

const action= {
    type :FETCH_POKEMON_DETAILS,
    types:[{type:'grass'},{type:'poison'}],
    abilities:[{ability:'overgrow'},{ability:'chlorophyll'}]
}

describe('pokedetails reducer',() => {

    it('should return initial state for undefined state' , () => {

        expect(pokedetailsReducer(undefined,{})).toEqual(initialState)

    })

    it('should return new state on action',() => {

        expect(pokedetailsReducer(initialState,action)).toEqual({
            types:[{type:'grass'},{type:'poison'}],
            abilities:[{ability:'overgrow'},{ability:'chlorophyll'}]
        })
    })
})