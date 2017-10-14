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

//post middleware function
router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function (err, post) {
    if (err) { return next(err); }
    if (!post) { return next( new Error('cant\'t find post'));}

    req.post = post;
    return next();
  });
});

//comment middleware function
router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);

  query.exec(function (err, comment) {
    if (err) { return next(err); }
    if (!comment) { return next( new Error('cant\'t find comment'));}

    req.comment = comment;
    return next();
  });
});

/*upvote a post - PUT /posts/:id/upvote - upvote a post, notice we use the post ID in the URL */
router.put('/posts/:post/upvote', function(req, res, next) {
  req.post.upvote(function(err, post) {
    if (err) { return next(err); }

    res.json(post);
  });
});

/*view comments associated with a post - GET /posts/:id - return an individual post with associated comments */
router.get('/posts/:post', function(req, res, next) {
  req.post.populate('comments', function(err, post) {
    if (err) { return next(err); }

    res.json(req.post);
  });
});

/*add a comment - POST /posts/:id/comments - add a new comment to a post by ID */
router.post('/posts/:post/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;

  comment.save(function(err, comment) {
    if (err) {return next(err); }

    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if (err) { return next(err); }

      res.json(comment);
    });
  });
});

/*upvote a comment - PUT /posts/:id/comments/:id/upvote - upvote a comment*/
router.put('/posts/:post/comments/:comment/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment) {
    if (err) { return next(err); }

    res.json(comment);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;