'use strict';

var faker = require('faker');

// schemat + wartości predefiniowane
var data = [
    {
        id: 1,
        postId: 1,
        desc: 'json server'
    },
    {
        id: 2,
        postId: 1,
        desc: 'json server 2'
    }
];

// exports.data = data;
exports.prepare = function () {

    // wartości losowe
    for (var i = 0; i < 50; i++) {
        data.push({
            id: (data.length + 1),
            postId: (data.length + 1),
            desc: faker.lorem.words()
        });
    }

    return data;
};
