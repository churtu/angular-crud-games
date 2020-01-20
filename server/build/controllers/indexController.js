"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Bienvenido a REST API for Angular');
    }
}
exports.indexController = new IndexController();
