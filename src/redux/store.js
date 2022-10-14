import { createStore } from "redux";
import list from '../countries.json'

const store =  createStore(function(state, action){
    return state
},{
   list
})

export default store