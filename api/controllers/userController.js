import { UserModel } from "../models/userModel.js";

export const registerUser  = async (req,res) =>{
    try {
        //validamos que los datos existan
        
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const rol = req.body.rol
        console.log(req.body)
        //definir que administradores no puedan crear clientes
        if((req.user?.rol === "administrator" || req.user?.rol === "mechanic")&& rol === "operator"){
            res.status(400).json({msg:"los administradores ni los mecanicos pueden crear operadores"})
            return
        }

        //validamos que los datos proporcionados esten completos

        if( !name || !email || !password || !rol){
            res.status(400).json({msg:"Faltam datos para crear un usuario"})
            return
        }
             //validamos que el usuario sea admin si el usuario a crear es admin
      if (req.user.rol == "administrator" && req.user?.rol != "administrator"){
        res.status(400).json({msg:"Si quieres crear un admin debes ser uno"})
        return
    }
//creamos user apartir de su modelo
    const user = await UserModel.create({
        name, 
        email,
        password,
        rol
    })

    res.status(200).json({msg:"Usuario registrado con exito"})
    return
} catch (error) {
      console.log(error)
      res.status(500).json({msg:"Hubo un error al crear el usuario"})
      return
}
}

export const logIn = async(req, res)=>{
  try {
      const user = await UserModel.findOne({email: req.body.email, password: req.body.password})

      if (!user){
          res.status(400).json({msg:"Este usuario no esta registrado"})
          return
      };

  res.status(200).json({msg:"sesion iniciada con exito", user})
  return

  } catch (error) {
     console.log(error);
     res.status(500).json({msg:"Hubo un error al iniciar sesion"}) 
     return
  }
}

export const test = () =>{
    console.log("Si funciona el controlador")
}       

         
    