const validacion =(userData)=>{
  const errors={};

  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
       errors.email= "El email ingresado no es valido"
  }
  if(!userData.email){
     errors.email= "ingrese por favor un email"
  }
  if (userData.email.length > 35) {
    errors.email ="El email no debe superar los 35 caracteres"
  }
  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(userData.password)) {
    errors.password="La contraseña debe contener al menos un numero"
  }
  if (userData.password.length < 6 && userData.password.length > 10) {
    errors.password="la contraseña debe tener un tamaño entre 6 y 10 caracteres"
  }

  return errors;
}

export default validacion;