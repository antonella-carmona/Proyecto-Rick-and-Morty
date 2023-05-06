import { useState } from "react";

//este componente es la barra de busqueda de id para los personajes una vez logeados.

export default function SearchBar({onSearch}) {

   const [id, setId]= useState("");//uso de estados retorna un [{}]
   const handleChange= (event)=>{//controlador cambio
      setId(event.target.value)
     
   }
   
//onChange= cambio es un metodo que le dice quedate atento que cuendo sucede un cambio ejecuta tal fn = event listener
   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=>{onSearch(id); setId("")}}> Agregar </button>
      </div>
   );
  
   
}
