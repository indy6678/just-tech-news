const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Vote, Comment } = require("../models");

// homepage route
router.get("/", (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      //   console.log(dbPostData[0]);
      const posts = dbPostData.map(post => post.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render("homepage", {posts});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route
router.get('/login', (req, res) => {
  if(req.session.loggedIn) { // if user is logged in, homepage will load
    res.redirect('/');
    return;
  }
    res.render('login')
})

module.exports = router;