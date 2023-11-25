import { Request, Response } from "express";

export const getAlumnos = (req: Request, res: Response) => {
    res.json({
        msg: "get Alumnos"
    })
}