const express = require('express');

const router = express.Router();

router.get('/application', (req, res) => {
    res.send('Application route is working!');
})

module.exports = router;