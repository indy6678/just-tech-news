// collect packaged API routes

const router = require('express').Router();

const apiRoutes = require('./api/index');

router.use('/api', apiRoutes); // all routes will  be prefixed with /api

// this is used to capture any endpoint requests that do not exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;