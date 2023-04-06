import express from "express"
import {getGoldPrices, retrieveGoldPrice} from "../controller/goldPrice.js";

// Ce router doit être accessible depuis la route localhost:3000/oilspill

let router = express.Router()


/**
 * @openapi
 * /gold-price:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', getGoldPrices)
router.get('/retrieve', retrieveGoldPrice)
export default router