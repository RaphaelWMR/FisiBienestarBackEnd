"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAlumno = exports.postAlumno = exports.deleteAlumno = exports.getAlumno = exports.getAlumnos = void 0;
const getAlumnos = (req, res) => {
    res.json({
        msg: "get Alumnos"
    });
};
exports.getAlumnos = getAlumnos;
const getAlumno = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "get Alumnos",
        id
    });
};
exports.getAlumno = getAlumno;
const deleteAlumno = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delete Alumno",
        id
    });
};
exports.deleteAlumno = deleteAlumno;
const postAlumno = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post Alumno",
        body
    });
};
exports.postAlumno = postAlumno;
const updateAlumno = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update Alumno",
        id,
        body
    });
};
exports.updateAlumno = updateAlumno;
