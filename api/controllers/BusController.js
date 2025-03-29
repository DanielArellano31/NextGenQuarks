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


export const getReportsByBus = async (req, res) => {
    try {
        const { busId } = req.params;
        const busReports = await ReportModel.find({ busId });

        if (!busReports || busReports.length === 0) {
            return res.status(400).json({ msg: "No se han encontrado reportes de este autobus" });
        }

        res.status(200).json({ msg: "Datos obtenidos con éxito", busReports });
    } catch (error) {
        res.status(500).json({ msg: "Hubo un error al obtener los reportes" });
    }
};
