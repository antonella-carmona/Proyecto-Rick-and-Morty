import { ADD_FAV } from "./action-types";
import { REMOVE_FAV } from "./action-types";
import { FILTER_CARDS, ORDER_CARDS } from "./action-types";
import axios from "axios";


//character  //{  {"name":"Morty"},{"status":"niidea"},{"gender": "femali"}.....}
export const add_fav = (character)=>{
    
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
            
            if(!data.length) throw new Error("No hay favoritos")

            return dispatch({
                type: ADD_FAV,
                payload: data,
             });

        } catch (error) {
            console.log(error.message)
        }

       
          
       
    };
}

export const remove_fav= (id)=>{
    // return{type: REMOVE_FAV, payload: id}
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const {data}= await axios.delete(endpoint)
            
            // if(!data.length) throw new Error("No hay favoritos")

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
          });
        } catch (error) {
            console.log(error.message)
        }
        

       
      
         
       
    };
}

export const filter_cards= (gender)=>{
      return{
          type: FILTER_CARDS, payload: gender
      }
}

export const order_cards= (orden)=>{
    return{
        type: ORDER_CARDS, payload: orden
    }
}

