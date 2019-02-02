'use strict';

// endpoints

// mock
var users = require('./endpoints/mock/users');
var posts = require('./endpoints/mock/posts');
var comments = require('./endpoints/mock/comments');
var summary = require('./endpoints/mock/summary');

// custom route
var routeSummary = require('./endpoints/route/summary');
var routeCommentsCount = require('./endpoints/route/comments-count');

// prepare data object
var dataPrepare = function() {
    return {
        posts: posts.prepare(),
        comments: comments.prepare(),
        users: users.prepare(),
        summary: summary.prepare() // router GET
    };
};

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router(dataPrepare());
var middlewares = jsonServer.defaults({noCors: true});

// router.render = function (req, res) {
//   res.jsonp({
//    data: res.locals.data
//   });
// }

var db = router.db;

// server.use(middlewares);
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
   });

// GET: /summary
// GET: /summary/?userId=1
server.get('/summary', routeSummary.get(db));
server.get('/summary/:id', routeSummary.getById(db));
server.get('/comments/count', routeCommentsCount.count(db));

server.use(jsonServer.rewriter({
    "/posts/:postId/comments": "/comments/?postId=:postId",
    "/posts/:postId/comments/:commentId": "/comments/:commentId",
    "/users/:userId/posts": "/posts/?userId=:userId",
    "/users/:userId/posts/:postId": "/posts/:postId"
}));

server.use(middlewares);
server.use(router)
server.listen(2000, function () {});
