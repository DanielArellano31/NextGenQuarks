import { ReportModel } from "../models/ReportModel.js";

export const createReport = async (req,res) =>{
    try {
        const {Description, grade, date, nameOperator, unityNumber} = req.body;


        //validamos datos dados por el usuario
        if(!Description || !grade || !date || !nameOperator || !unityNumber){
            res.status(400).json({msg:"Faltan datos para crear el reporte"});
            return

        }
        //creacion del reporte
        const report = await ReportModel.create({Description, grade, date, nameOperator, unityNumber});
        res.status(200).json({msg:"Reporte creado con exito", report})

    } catch (error) {
        console.error("Error en createReport", error)
        res.status(500).json({msg:"Hubo un error al crear el reporte"})   
    }
}


export const getAllReports = async (req,res)=>{
    try {
        const allReports = await ReportModel.find({});
        res.status(200).json({msg:"Datos obtenidos con exito", allReports})
    } catch (error) {
        console.error("Error en getAllReports", error)
        res.status(500).json({msg:"Hubo un error al obtener las metricas"})   
    }
}