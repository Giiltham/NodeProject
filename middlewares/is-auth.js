import jwt from 'jsonwebtoken';
import {buildErrorResponse} from "../controllers/utils.js";

let isAuth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return buildErrorResponse(res, 401, ['Not authenticated'])
    }
    const token = authHeader
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecretsecret');
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        return buildErrorResponse(res, 401, ['Not authenticated'])
    }
    req.userId = decodedToken.userId;
    next();
};

export default isAuth;