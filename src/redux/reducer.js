
import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-types";


const inicialState={
    myFavorites: [],
    allCharacters: []

}
//payload ADD_FAV= {  {"name":"Morty"},{"status":"niidea"},{"gender": "femali"}.....} character
const reducer = (state= inicialState, {type, payload})=>{
   switch (type) {
     case ADD_FAV: return{
        ...state,
        myFavorites:  payload,
        allCharacters:  payload
     }
     case REMOVE_FAV : return{
          ...state,
          myFavorites: payload,
          allCharacters:  payload
     }

     case FILTER_CARDS: 
     const filterAllcharacter= state.allCharacters.filter(cadaCharacter =>
               cadaCharacter.gender === payload )
     return{
           ...state,
       myFavorites:
       payload === "AllCharacters"
       ? [...state.allCharacters]
       : filterAllcharacter
           
     }

     case ORDER_CARDS: const copyAllCharacter= [...state.allCharacters]
       return{
        ...state,
        myFavorites:
        payload === "A"
        ? copyAllCharacter.sort((a,b)=> a.id - b.id )
        : copyAllCharacter.sort((a,b)=> b.id - a.id)
       }



    default:
        return{
            ...state
        }
   }
}



export default reducer;