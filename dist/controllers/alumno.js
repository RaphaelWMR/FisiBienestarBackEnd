"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAlumno = exports.postAlumno = exports.deleteAlumno = exports.getAlumno = exports.getAlumnos = void 0;
const alumno_1 = __importDefault(require("../models/alumno"));
const getAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAlumnos = yield alumno_1.default.findAll();
    res.json({
        listAlumnos
    });
});
exports.getAlumnos = getAlumnos;
const getAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const alumno = yield alumno_1.default.findByPk(id);
    if (alumno) {
        res.json(alumno);
    }
    else {
        res.status(404).json({
            msg: `App>Alumno with id ${id} doesn't exist`
        });
    }
});
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
