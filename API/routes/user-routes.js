const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {

    const userData = req.body;
    const query = `SELECT * FROM FnGetUserSel('${userData.username}', '${userData.password}')`;

    const client = require('../DB/dbConnection');

    const record = await client.query(query);

    if(record.rows){

        res.status(200).json({
            message: "User Received",
            data: record.rows
        });
    }
    else{
        res.status(500).json({
            message: "Invalid Username or Password",
            data: []
        })

    }

});

module.exports = router;