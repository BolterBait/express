const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.end("finish");
});

module.exports = {
    router,
}