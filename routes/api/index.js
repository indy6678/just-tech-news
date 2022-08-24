// collect and package all API routes

const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes')

// implement routes to another router instance, prefixed with /users
router.use('/users', userRoutes);
router.use('/posts', postRoutes)

module.exports = router;