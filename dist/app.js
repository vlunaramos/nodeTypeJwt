"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
// inicializacion
const app = (0, express_1.default)();
// settins
app.set('port', process.env.PORT || 3000);
// middleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// routes
app.get('/', (req, res) => {
    res.send(`http://localhost:${app.get('port')}`);
});
app.use(auth_routes_1.default);
exports.default = app;
