const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "items" ORDER BY "id"`;

    pool.query(queryText)
        .then((result) => {
            console.log('Retrieved from DB: ', result.rows);
            res.send(result.rows);
        })
        .catch(err => {
            alert('error GETing:', err)
        });
});



router.post('/', (req, res) => {
    const queryText = `INSERT INTO "items" ("name", "qty", "unit") VALUES ($1, $2, $3)`;


    pool.query(queryText, [req.body.name, req.body.qty, req.body.unit])
        .then((results) => {
            console.log('POSTED to server:', req.body);
            res.sendStatus(201);
        }).catch((err) => {
            alert('error POSTing', err);
        });
});



module.exports=router;