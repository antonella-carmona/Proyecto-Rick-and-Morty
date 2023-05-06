// import logo from './logo/logo.png'
// import caraMorty from "./logo/pngaaa.png"

import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Error from "./components/Error/Error";
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites"
import { useState, useEffect } from 'react'; //USO DE ESTADOS
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";


// const URL_BASE =`https://be-a-rym.up.railway.app/api/character`;
// const API_KEY = `c7e1d9f502a1.317ecf39650b010689ec`;

// const email= "ia.carmona@hotmail.com"
// const password = "Ivi2020"




function App() {
 const [access, setAccess] = useState(false)

 const location = useLocation();//permite acceder a la información de la ubicación del navegador del usuario. 
 
 const navigate = useNavigate()

 const [characters, setCharacters]= useState([]);//uso de estados retorna un [{}]


 const URL = 'http://localhost:3001/rickandmorty/login/';
 const login= async(userData)=> {
   try {
      const { email, password } = userData;
      const {data}= await axios(URL + `?email=${email}&password=${password}`) 
      
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
      
   } catch (error) {
      console.log(error.message)
   }  
}

 

   useEffect(() => {
   !access && navigate('/')
    }, [access]);


 const onSearch= async (id)=> {
   try {
     const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
  
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } 
   } 
   catch (error) {
       alert('¡No hay personajes con este ID!');
      }
}

const onClose= (id)=>{
const characterFiltrados= characters.filter( character =>
  character.id !== Number(id))
  setCharacters(characterFiltrados)
}



   return (
      
   <div className='app'>
      <div className='burbujas'>  

         <div className='burbuja'/>  
         <div className='burbuja'/>
         <div className='burbuja'/> 
         <div className='burbuja'/> 
         <div className='burbuja'/> 
         <div className='burbuja'/> 
         <div className='burbuja'/> 
         <div className='burbuja'/> 
         <div className='burbuja'/>
         <div className='burbuja'/>    
          
      </div>
        
        

      


        
         {
            location.pathname !== "/"
            ? <Nav onSearch={onSearch}  setAccess={setAccess}/>
            : null
         }


          
          <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/deatil/:id' element={<Deatil/>}/>
            <Route path='*' element={<Error/>} />
            <Route path='/favorites' element={<Favorites/>}/>
            
          </Routes>


      
         
        
       
      </div>
   );
}

export default App;
