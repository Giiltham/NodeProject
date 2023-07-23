import express from "express"
import {
    createGoldPrice,
    deleteGoldPrice,
    retrieveGoldPrice,
    updateGoldPrice
} from "../controllers/goldPrice.js";

import isAuth from "../middlewares/is-auth.js"


// Ce router doit être accessible depuis la route localhost:3000/gold-prices
let router = express.Router()

/**
 * @openapi
 * /gold-prices/{id}:
 *  get:
 *    summary: returns a gold price
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: id of the gold price to retrieve.
 *        type: string
 *        format: date
 *        example: "2020-01-03"
 *    responses:
 *      200:
 *        description: gold price retrieved
 */
router.get('/:id', retrieveGoldPrice)

/**
 * @openapi
 * /gold-prices:
 *   post:
 *     summary: create a gold price
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  format: date
 *                open:
 *                  type: number
 *                high:
 *                  type: number
 *                low:
 *                  type: number
 *                close:
 *                  type: number
 *                volume:
 *                  type: number
 *
 *     responses:
 *       201:
 *         description: Returns the created gold price
 */
router.post('/', createGoldPrice)

/**
 * @openapi
 * /gold-prices/{id}:
 *   post:
 *     summary: update a gold price
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: id of the gold price to update.
 *        type: string
 *        format: date
 *        example: "2020-01-03"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                open:
 *                  type: number
 *                high:
 *                  type: number
 *                low:
 *                  type: number
 *                close:
 *                  type: number
 *                volume:
 *                  type: number
 *     responses:
 *       200:
 *         description: Returns the updated gold price
 */
router.post('/:id', updateGoldPrice)

/**
 * @openapi
 * /gold-prices/{id}:
 *  delete:
 *    summary: delete a gold price
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: id of the gold price to delete.
 *        type: string
 *        format: date
 *        example: "2020-01-03"
 *    responses:
 *      204:
 *        description: gold price deleted
 */
router.delete('/:id', deleteGoldPrice)

export default router