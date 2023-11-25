import { Router } from 'express';
import {
    getAlumnos,
    getAlumno,
    deleteAlumno,
    postAlumno,
    updateAlumno
} from '../controllers/alumno';

const router = Router();

router.get('/', getAlumnos);
router.get('/:id', getAlumno);
router.delete('/:id', deleteAlumno);
router.post('/', postAlumno)
router.put('/:id', updateAlumno);
export default router;