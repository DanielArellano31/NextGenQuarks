import { model, Schema} from "mongoose";

const  UserSchema = new Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true
        
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        enum:["administrator", "mechanic","operator"],
        default:"operator"
    }
})

export const UserModel = new model("UserModel", UserSchema)