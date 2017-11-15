'use strict';

function Search() {
}

Search.prototype.query = () => {
    return new Promise((resolve, reject) => {
        // perform some query logic
        resolve('resolving to controller');
        reject('this wont happen');
    });
};

module.exports = Search;