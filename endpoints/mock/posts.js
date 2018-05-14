'use strict';

var faker = require('faker');

var data = [
    {
        id: 1,
        userId: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
        id: 2,
        userId: 2,
        title: ' Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi'
    }
];

exports.prepare = function () {

    for (var i = 0; i < 50; i++) {
        data.push({
            id: (data.length - 1),
            userId: (data.length - 1),
            title: faker.lorem.words()
        });
    }

    return data;
};
