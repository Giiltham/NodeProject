import express from "express";

import User from '../models/user.js';
import {body} from "express-validator";
import * as authController from "../controllers/auth.js";

const router = express.Router();

router.put(
    '/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, { req }) => {
                return User.findOne({ email: value }).then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('E-Mail address already exists!');
                    }
                });
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({ min: 5 })
    ],
    authController.signup
);

router.post('/login', authController.login);

export default router;
