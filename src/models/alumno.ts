import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Alumno = db.define('Alumno',
    {

        alumno_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        alumno_primerApellido: {
            type: DataTypes.STRING
        },
        alumno_segundoApellido: {
            type: DataTypes.STRING
        },
        alumno_nombres: {
            type: DataTypes.STRING
        },
        alumno_dni: {
            type: DataTypes.STRING
        },
        alumno_codigo: {
            type: DataTypes.STRING
        },
        alumno_telefono: {
            type: DataTypes.STRING
        },
        alumno_correoElectronico: {
            type: DataTypes.STRING
        },
        estado_id: {
            type: DataTypes.INTEGER
        },
        alumno_fechaNacimiento: {
            type: DataTypes.DATEONLY
        },
        eap_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'Alumno',
        indexes: [
            {
                unique: true,
                fields: ['alumno_id']
            }
        ]
    }
);

export default Alumno;