'use strict';

var faker = require('faker');

// schemat + wartości predefiniowane
var data = [
    {
        id: 1,
        name: 'Oleg',
        surname: 'Kiest'
    },
    {
        id: 2,
        name: 'Waldemar',
        surname: 'Kiest'
    }
];

// exports.data = data;
exports.prepare = function () {

    // wartości losowe
    for (var i = 0; i < 10; i++) {
        data.push({
            id: (data.length + 1),
            name: faker.name.firstName(),
            surname: faker.name.lastName()
        });
    }

    return data;
};
