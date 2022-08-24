// collect and package all API routes

const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// implement routes to another router instance, prefixed as appropriate
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes); // all routes in commentRoutes will have a /comments prefix

module.exports = router;