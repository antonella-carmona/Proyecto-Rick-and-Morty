import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE =`https://be-a-rym.up.railway.app/api/character`;
// const API_KEY = `c7e1d9f502a1.317ecf39650b010689ec`;


const Deatil = ()=>{
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(( {data} ) => {
         if (data.name) {
         setCharacter(data);
             } else {
                window.alert('No hay personajes con ese ID');
             }
        });
          return setCharacter({});
         }, [id]);

    return(
        
        
            <div>
                <h2>{character?.name} </h2>
                <h2>{ character?.status}</h2>
                <h2> { character?.species}</h2>
                <h2>{ character?.gender}</h2>
                <h2>{character?.origin?.name}</h2>
                <img src={character?.image} alt={character?.name}/>
              
            </div>
        
        
    )

}

export default Deatil;