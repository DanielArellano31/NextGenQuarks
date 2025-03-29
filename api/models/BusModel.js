import  {Schema, model} from "mongoose";

const BusSchema = new Schema({
    number:{
        type: Number,
        required: true
    }
    
})
export const BusModel = new model("BusModel", BusSchema)