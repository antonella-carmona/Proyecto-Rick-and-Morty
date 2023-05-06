import { Link } from "react-router-dom";
import { add_fav, remove_fav } from "../../redux/action";
import {connect} from "react-redux"
import { useState, useEffect } from "react";

function Card({id, name, status, species, gender, origin, image, onClose, add_fav, remove_fav, myFavorites}) {//en vez de ultilizar props.algo puedo hacer destructuryn
   const [isFav, setIsfav] = useState(false);
   
   const handleFavorite= ()=>{
      if (isFav) {
         setIsfav(false) 
         remove_fav(id)}
      
      else {
         setIsfav(true) 
         add_fav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);

  
   return (
      <div  className='personaje-header'>
         <section className='personaje'>


         {
         isFav ? (<button onClick={handleFavorite}>❤️</button>) 
         : ( <button onClick={handleFavorite}>🤍</button>)
         }

         <button onClick={ ()=> onClose(id)}>X</button>
         <Link to={`/deatil/${id}`}>
         <h2>{name}</h2>
         </Link>
         
         <img src={image} alt=""/>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         
        
         </section>
      </div>
   );
}

const mapStateToProps= (state)=>{
  return{
      myFavorites: state.myFavorites
  }
}

const  mapDispatchToProps=(dispatch)=>{
     return{
      add_fav:    (character)=> {dispatch(add_fav(character))},
      remove_fav: (id)=> {dispatch(remove_fav(id))}
     }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
 
