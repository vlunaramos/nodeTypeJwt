"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const signUp = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Please send your email and password' });
    }
};
exports.signUp = signUp;
const signIn = (req, res) => {
    res.send('signIn');
};
exports.signIn = signIn;
