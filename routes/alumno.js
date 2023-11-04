const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/getAlumnos', (req, res) => {
    let user = req.body;
    query = "select * from alumno where alumno_id=?";
    connection.query(query, [alumno.id], (err, results) => {
        if (!err) {
            if (results.length <= 0) {

            }
        } else {
            return res.status(500).json(err);
        }
    })
    if (!err) {

    } else {
        return res.status(500).json(err);
    }
});

module.exports = router;