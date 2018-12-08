import {FETCH_POKEMON} from "../actions/types";
import pokedataReducer from './pokedataReducer'

const initialState = {
    pokemons :[]
}

const action= {
    type :FETCH_POKEMON,
    payload:[{name:'bulbasaur'},{name:'pikachu'}]
}

describe('pokedata reducer',() => {

    it('should return initial state for undefined state' , () => {

        expect(pokedataReducer(undefined,{})).toEqual(initialState)
    })

    it('should return new state on action',() => {

        expect(pokedataReducer(initialState,action)).toEqual({
            pokemons:[{name:'bulbasaur'},{name:'pikachu'}]
        })
    })
})