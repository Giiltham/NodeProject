import GoldPrice from "../models/goldPrice.js";
import {buildErrorResponse, buildSuccessResponse} from "./utils.js";



export const retrieveGoldPrice = async (req, res) => {
    console.log(req.params.id)

    const goldPrice = await GoldPrice.findOne({"id": new Date(req.params.id)})

    if(!goldPrice) return buildErrorResponse(res, 500, ["gold price not found"]);
    return buildSuccessResponse(res,200,goldPrice)
}

export const deleteGoldPrice = async (req, res) => {
    const deleteResult = await GoldPrice.findOneAndDelete({id: new Date(req.params.id)})

    if(!deleteResult) return buildErrorResponse(res,500,["gold price not found"])
    return buildSuccessResponse(res,204, {})

}

export const updateGoldPrice = async (req, res) => {
    try {
        const {open, high, low, close, volume} = {...req.body}
        const successfull = await GoldPrice.updateOne({id: new Date(req.params.id)}, {$set: {open,high,close,low,volume}}, {new: true})

        const goldPrice = await GoldPrice.findOne({id: new Date(req.params.id)})

        if(!successfull) return buildErrorResponse(res, 500, ["gold price not found"]);
        return buildSuccessResponse(res,200, goldPrice)
    }
    catch(err) {
        buildErrorResponse(res, 500, "error in request body")
    }
}

export const createGoldPrice = async (req, res) => {

    const {id, open, high, low, close, volume} = {...req.body}

    const gp = await GoldPrice.findOne({id: new Date(id)});
    if(gp){
        return buildErrorResponse(res,500, ["gold price with this id already exist"])
    }

    const goldPrice = new GoldPrice({
        id, open, high, low, close, volume
    })

    try {
        const dbGoldPrice = await GoldPrice.create(goldPrice)
        buildSuccessResponse(res, 201, dbGoldPrice)
    } catch (err) {
        const errors = []
        for (const k in err.errors) { errors.push(err.errors[k].message)}
        buildErrorResponse(res, 500, errors)
    }

}

