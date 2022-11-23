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

module.exports=router;