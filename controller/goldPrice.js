import GoldPrice from "../models/goldPrice.js";

export const getGoldPrices = async (req, res, next) => {
    return GoldPrice.find({}, {}, {limit:10}).then((goldPrices) => {
        res
            .status(200)
            .json({
                message: "Gold prices retrieved",
                goldPrices: goldPrices
            })
    }).catch((error) => {
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    })
}

export const retrieveGoldPrice = (req, res, next) => {
    return GoldPrice.findOne({_id : req.query.id}).then((goldPrice) => {
        res
            .status(200)
            .json({
                message: "Gold prices retrieved",
                goldPrice: goldPrice
            })
    }).catch((error) => {
        if(!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    })
}

export const deleteGoldPrices = (req, res, next) => {
}

export const updateGoldPrices = (req, res, next) => {

}

export const createGoldPrices = (req, res, next) => {

}
