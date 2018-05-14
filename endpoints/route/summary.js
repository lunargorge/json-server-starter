'use strict';

const prepareSummaryItem = (db, itemSummary) => {
    let posts = db.get('posts').filter({ userId: itemSummary.userId }).value();
    itemSummary.postCount = posts ? posts.length : 0;
    return itemSummary;
};

exports.get = function (db) {
    return (req, res) => {
        let summary = [];
        let filter = {};

        if (req.query.userId) {
            filter['userId'] = parseInt(req.query.userId, 10);
        }

        db.get('summary').filter(filter).value().forEach((itemSummary) => {
            summary.push(prepareSummaryItem(db, itemSummary));
        });

        res.jsonp(summary)
    }
};

exports.getById = function (db) {
    return (req, res) => {
        let summary = {};
        let filter = { id: parseInt(req.params.id, 10) };

        db.get('summary').filter(filter).value().forEach((itemSummary) => {
            summary = prepareSummaryItem(db, itemSummary);
        });

        res.jsonp(summary)
    }
};
