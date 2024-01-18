"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRETE || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/jwttutorial',
        USER: process.env.MONGODB_USER || '',
        PASSWORD: process.env.MONGODB_PASSWORD || '',
    }
};
