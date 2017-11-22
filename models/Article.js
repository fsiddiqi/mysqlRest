var db = require('../dbconnection');

var Article = {

    getAllArticles: function (callback) {

        return db.query("Select * from Article", callback);

    },
    getArticleById: function (id, callback) {

        return db.query("select * from Article where Id=?", [id], callback);
    },
    addArticle: function (Article, callback) {
        console.log("inside service");
        console.log(Article);
        return db.query("Insert into Article values(?,?,?,?)", [Article.Id, Article.Title, Article.url, Article.text], callback);
    },
    deleteArticle: function (id, callback) {
        return db.query("delete from Article where Id=?", [id], callback);
    },
    updateArticle: function (id, Article, callback) {
        return db.query("update Article set title=?,url=?,text=? where id=?", [Article.title, Article.url, Article.text, id], callback);
    },
    deleteAll: function (item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].Id;
        }
        return db.query("delete from Article where Id in (?)", [delarr], callback);
    }
};
module.exports = Article;