import { Request, Response } from 'express';

class IndexController {
    public index(req: Request, res: Response){
        res.send('Bienvenido a REST API for Angular');
    }
}

export const indexController = new IndexController();