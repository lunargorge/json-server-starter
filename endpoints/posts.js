'use strict';

var faker = require('faker');

// schemat + wartości predefiniowane
var data = [
    {
        id: 1,
        title: 'json server',
    },
    {
        id: 2,
        title: 'json server 2 43'
    }
];

// exports.data = data;
exports.prepare = function () {

    // wartości losowe
    for (var i = 0; i < 50; i++) {
        data.push({
            id: (data.length + 1),
            title: faker.lorem.word()
        });
    }

    return data;
};
