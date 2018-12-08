import {combineReducers} from 'redux';
import pokedataReducer from './pokedataReducer'

export default combineReducers({
    pokedata:pokedataReducer,
})