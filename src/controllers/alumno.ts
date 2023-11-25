import { Request, Response } from 'express';
import Alumno from '../models/alumno';

export const getAlumnos = async (req: Request, res: Response) => {
    const listAlumnos = await Alumno.findAll();

    res.json({
        listAlumnos
    })
}

export const getAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    const alumno = await Alumno.findByPk(id);

    if (alumno) {
        res.json(alumno);
    } else {
        res.status(404).json({
            msg: `App>Alumno with id ${id} doesn't exist`
        });
    }
}

export const deleteAlumno = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: "delete Alumno",
        id
    })
}

export const postAlumno = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: "post Alumno",
        body
    })
}

export const updateAlumno = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update Alumno",
        id,
        body
    })
}