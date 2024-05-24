"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const connection_1 = __importDefault(require("./connection"));
const cors_1 = __importDefault(require("cors"));
const Fashion_1 = require("./routes/Listproduct/Fashion");
const body_parser_1 = __importDefault(require("body-parser"));
async function server() {
    const app = (0, express_1.default)();
    const httpserver = http_1.default.createServer(app);
    const PORT = Number(process.env.PORT) || 8000;
    app.use(body_parser_1.default.json());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cors_1.default)({
        origin: "*", // Specify the origin you want to allow
        methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"], // Specify the methods you want to allow
        allowedHeaders: "*", // Specify the headers you want to allow
    }));
    // Db Connection
    (0, connection_1.default)('mongodb://127.0.0.1:27017/egrandmall');
    app.get('/api', (req, res) => { res.send("Welcome to egrandmart"); });
    app.use('/', Fashion_1.listCloth);
    httpserver.listen(PORT, () => console.log(`server listening on ${PORT}`));
}
server();
