import { Request, Response } from 'express';

export const miControlador = (req: Request, res: Response) => {
    res.send('Hola Mundo!');
};