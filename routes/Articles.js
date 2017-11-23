var express = require('express');
var router = express.Router();
var Article = require('../models/Article');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        Article.getArticleById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                // Return the first row from result set
                res.json(rows[0]);
            }
        });
    } else {

        Article.getAllArticles(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.set("X-Total-Count", rows.length);
                res.json(rows);
            }

        });
    }
});
router.post('/', function (req, res, next) {

    Article.addArticle(req.body, function (err, count) {

        console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});
router.post('/:id', function (req, res, next) {
    Article.deleteAll(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.delete('/:id', function (req, res, next) {

    Article.deleteArticle(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:id', function (req, res, next) {

    Article.updateArticle(req.params.id, req.body, function (err, rows) {

        console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;