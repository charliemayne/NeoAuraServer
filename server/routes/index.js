const express = require("express");
const db = require("../db");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/food', async (req, res, next) => {
    try {
        let results = await db.allFood();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/supplier', async (req, res, next) => {
    try {
        let results = await db.allSupplier();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/store', async (req, res, next) => {
    try {
        let results = await db.allStore();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;