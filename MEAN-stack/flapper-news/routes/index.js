var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/*view all posts - GET /posts - return a list of posts and associated metadata */
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }
    res.json(posts);
    });
});

/*Add a new post - POST /posts - create a new post */
router.post('/posts', function(req, res, next) {
  var post = new Post(req.body);
  post.save(function(err, post){
    if(err){ return next(err); }
    res.json(post);
  });
});

/*upvote a post - PUT /posts/:id/upvote - upvote a post, notice we use the post ID in the URL */

/*view comments associated with a post - GET /posts/:id - return an individual post with associated comments */

/*add a comment - POST /posts/:id/comments - add a new comment to a post by ID */

/*upvote a comment - PUT /posts/:id/comments/:id/upvote - upvote a comment*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;