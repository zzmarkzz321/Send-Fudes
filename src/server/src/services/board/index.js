'use strict';

/*
* 1. CRUD
* 2. JSON return schema
* */

function Board() {
}

Board.prototype.getSingleJob = (job_id) => {
    return new Promise((resolve, reject) => {
        // TODO: DO OUT DATABASE CRAP HERE

        // EXAMPLE RESULT TODO: PLEASE MODIFY
        const resultJobDescription = {
            restaurant_name: 'in-n-out',
            rating: 4,
            proximity: 4.5,
            location: 'blah blah 16th street, Merced',
            request: [
                'double double',
                'fries',
                'drink'
            ],
            requester: 1013984734,
            accepted: false,
            date: '12-07-2017-1900'
        };

        // TODO If your database crap works
        if (resultJobDescription)
            resolve(resultJobDescription);

        // TODO ELSE, you'll reject with an error
        else
            reject({'message': 'This shit doesnt work'});
    });
};
module.exports = Board;