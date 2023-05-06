import Card from "../Card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filter_cards, order_cards } from "../../redux/action"; 
import { useState } from "react";


const Favorites = ({myFavorites})=>{
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handlerOrder= (event)=>{
        dispatch(order_cards(event.target.value))
        setAux(true)
    }
    
    const handlerFilter = (event)=>{
        dispatch(filter_cards(event.target.value))
    }


    return(
        <div>
            <select onChange={handlerOrder}>
                <option value={"A"} >Ascendente</option>
                <option value={"D"} >Descendente</option>
            </select>

            <select onChange={handlerFilter}>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Genderless"}>Genderless</option>
                <option value={"unknown"}>unknown</option>
                <option value={"AllCharacters"}>All Characters</option>
            </select>


         {
            myFavorites?.map(fav =>{
                return(
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    status={fav.status}
                    species={fav.species}
                    gender={fav.gender}
                    origin={fav.origin.name}
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                )
            })
         }
        </div>
    )
}

const mapStateToProps= (state)=>{
   return{
    myFavorites: state.myFavorites
   }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)