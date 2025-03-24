import { UserModel } from "../models/userModel.js";


export const registerUser = async (req, res) => {
    try {
        const { name, email, password, rol } = req.body;

        // Validación de datos
        if (!name || !email || !password || !rol) {
            res.status(400).json({ msg: "Faltan datos para crear un usuario" });
            return;
        }

        // Validación de rol
        if (rol === "administrator" && req.user?.rol !== "administrator") {
            res.status(403).json({ msg: "No tienes permisos para crear un administrador" });
            return;
        }

        // Creación del usuario
        const user = await UserModel.create({ name, email, password, rol });
        res.status(201).json({ msg: "Usuario registrado con éxito", user });
    } catch (error) {
        console.error("Error en registerUser:", error);
        res.status(500).json({ msg: "Hubo un error al crear el usuario" });
    }
};


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


export const getAllUsers = async (req,res) =>{
  try {
    const allUsers = await UserModel.find({rol:"operator"});
    res.status(200).json({msg:"Datos obtenidos con exito", allUsers})
    return
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Hubo un error al obtener las metricas de la aplicacion" })
    return
}
  }


export const test = () =>{
    console.log("Si funciona el controlador")
}       

         
    