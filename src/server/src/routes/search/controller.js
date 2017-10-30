'user strict';

let controller = {};

controller.query = (req, res) => {
    const SearchService = require('../../services/search');
    return SearchService.prototype.query()
        .then((result) => {
            res.status(200).json({'response': 'Receiving response from search service: ', result});
        }).catch((err) => {
            res.status(500).json(err);
        });
};

module.exports = controller;