import { BusModel } from "../models/BusModel.js";
import { ReportModel } from "../models/ReportModel.js";


export const CreateBus = async(req,res)=>{
    try {
        const {number} = req.body;

        if(!number){
            res.status(400).json({msg:"Faltan datos para crear un camion"})
            return
        }
        const bus = await BusModel.create({number})
        res.status(200).json({msg:"Autobus creado con exito", bus})

    } catch (error) {
        console.log("Error en createBUS", error)
        res.status(500).json({msg:"Ocurrio un error al crear el autobus"})
    }
}

export const getReportsByBus = async(req,res)=>{
    try {
        const allBuses = await ReportModel.find({});
        res.status(200).json({msg:"Datos obtenidos con exito", allBuses})
        return
    } catch (error) {
        console-log("Error en getReportsByBus", error)
        res.status(500).json({msg:"Hubo un error al obtener las metricas"})
    }
}