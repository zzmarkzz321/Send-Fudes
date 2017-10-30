'user strict';

let controller = {};

controller.query = (req, res) => {
    return new Promise((resolve, reject) => {
        console.log(req);
        resolve('1+1=2');
    })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

module.exports = controller;