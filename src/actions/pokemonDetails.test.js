import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {fetchPokemonDetails} from "./pokemonDetails";
import {FETCH_POKEMON_DETAILS} from "./types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

describe('fetch pokemon details',() => {

    afterEach(() => {
        fetchMock.restore()
    })

    it('should fetch pokemon details',() => {

        const store = mockStore({
            types :[],
            abilities:[],
        })

        fetchMock.getOnce('https://pokeapi.co/api/v2/pokemon/1/',{
            body:{types:[{type:'grass'},{type:'poison'}],
                abilities:[{ability:'overgrow'},{ability:'chlorophyll'}]
                },
            headers : {'content-type':'application/json'}
        })

        const expectedAction = [{
            type:FETCH_POKEMON_DETAILS,
            types:[{type:'grass'},{type:'poison'}],
            abilities:[{ability:'overgrow'},{ability:'chlorophyll'}]
        }]

        store.dispatch(fetchPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/')).then( () => {
            expect(store.getActions()).toEqual(expectedAction)
        })


    })
})