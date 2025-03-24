import { model, Schema } from "mongoose";

const ReportSchema = new Schema({
    Description:{
        type:String,
        required:true
    },
    grade:{
        type:Number,

    },
    date:{
        type: String,
        required:false
    },
    nameOperator:{
        type:String,
        required:false
    },
    unityNumber:{
        type:Number,
        required:false
    }

})

export const ReportModel = new model("ReportModel", ReportSchema)