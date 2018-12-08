import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {fetchPokemonData} from './pokemonData';
import {FETCH_POKEMON} from './types'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('pokemon data' , () => {

    afterEach(()=> {
        fetchMock.restore()
    })

    it('should dispatch fetch for pokemon data',() =>{

        const store = mockStore({pokemons:[]})
        fetchMock.getOnce('https://pokeapi.co/api/v2/pokemon/?limit=20',{
            body:{results:[{name:'bulbasaur'},{name:'pikachu'}]},
            headers : {'content-type':'application/json'}
        })

        const expectedAction = [{
            type:FETCH_POKEMON,
            payload:[{name:'bulbasaur'},{name:'pikachu'}]
        }]

        store.dispatch(fetchPokemonData()).then( () => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})