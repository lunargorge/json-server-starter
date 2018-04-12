'use strict';

// endpoints
var users = require('./endpoints/users');
var posts = require('./endpoints/posts');
var comments = require('./endpoints/comments');

// prepare data object
var dataPrepare = function() {
    return {
        posts: posts.prepare(),
        comments: comments.prepare(),
        users: users.prepare(),
    };
};

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router(dataPrepare());
var middlewares = jsonServer.defaults();

// router.render = function (req, res) {
//   res.jsonp({
//    data: res.locals.data
//   });
// }

server.use(jsonServer.rewriter({
  "/posts/:postId/comments": "/comments/?postId=:postId",
  "/posts/:postId/comments/:commentId": "/comments/:commentId"
}));

server.use(middlewares)
server.use(router)
server.listen(2000, function () {})
