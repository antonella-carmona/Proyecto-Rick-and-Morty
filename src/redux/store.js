//CONFIGURACION DE STORE 
import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer";

//_____________________________________________________________________________________
//SI QUEREMOS VER LA MINI CONSOLA DE REDUX DEVTOOLS.AGREGAMOS
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//_______________________________________________________________________________________

const store= createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware)));
//esta ultima es para hacer petisiones a una api








export default store;