import { useState } from "react";
import validacion from "../Validation/validation";
import style from './Form.module.css'
import rickYmorty from "../logo/pngaaa2.png"
import font from "../fonts/Curse of the Zombie.ttf"



const Form= ({login})=>{
    const [errors, setErrors] = useState({})

    const [userData, setUserData]= useState({
        email: "",
        password: ""
    });

    const handleChange=(event)=>{
         setUserData({
            ...userData,
            [event.target.name]: event.target.value

         })
         setErrors(validacion({
            ...userData,
            [event.target.name]: event.target.value
         }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()//evita que se recarge la pagina 
        login(userData)
    }


    return(
        <div className={style.conteiner}>

        <div className={style.content}>

            <form onSubmit={handleSubmit}  className={style.formulario}>
                 <h2 className={style.title}>Sign in</h2>

                <label htmlFor="email" className={style.label}>Email: </label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} className={style.input} placeholder=" "/>
                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="password" className={style.label}>Password: </label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} className={style.input} placeholder=" "/>
                {errors.password && <p>{errors.password}</p>}

                <button className={style.boton} >Submit</button>
            </form>


            </div>

                     <div>
                        <figure className={style.image}>
                        <img src={rickYmorty} alt='Cara Rick & Morty' />
                        </figure>   
                     </div>  

        </div>


    

    )

}

export default Form;