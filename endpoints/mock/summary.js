'use strict';

var faker = require('faker');

var data = [
    {
        id: 1,
        userId: 1,
        name: 'Summary 1',
        postCount: 0
    },
    {
        id: 2,
        userId: 2,
        name: 'Summary 2',
        postCount: 0
    }
];

exports.prepare = function () {

    for (var i = 0; i < 10; i++) {
        data.push({
            id: (data.length + 1),
            userId: (data.length + 1),
            name: faker.lorem.word(),
            postCount: 0
        });
    }

    return data;
};
