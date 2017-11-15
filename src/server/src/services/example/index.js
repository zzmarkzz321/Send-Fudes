'user strict';

function Example () {

}

Example.prototype.example = () => {
    return new Promise((resolve, reject) => {
        // perform some query logic
        resolve('resolving to controller');
        reject('this wont happen');
    });
};

module.exports = Example;