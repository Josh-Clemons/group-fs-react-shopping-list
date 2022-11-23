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

// PUT request for resetting purchase status on all database items to false
router.put('/reset', (req, res) => {
    const resetQuery = `UPDATE "items" SET "isPurchased" = 'FALSE';`;
    pool.query(resetQuery).then(() => {
        console.log('PUT for /items/reset has been executed.');
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error making query ${resetQuery}, error is:`, error);
        res.sendStatus(500);
    })
})

// DELETE request for removing all items from the database
router.delete('/deleteall', (req, res) => {
    const deleteQuery = `DELETE FROM "items";`;
    pool.query(deleteQuery).then(() => {
        console.log('DELETE for /items/deleteall has been executed.');
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error making query ${resetQuery}, error is:`, error);
        res.sendStatus(500);
    })
})

module.exports=router;