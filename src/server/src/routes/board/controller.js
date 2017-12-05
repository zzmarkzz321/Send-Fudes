'user strict';

let board = {};

board.query = (req, res) => {
    const BoardService = require('../../services/board/index');
    return BoardService.prototype.getSingleJob()
        .then((result) => {
            res.status(200).json({'response': 'Receiving response from search service: ', result});
        }).catch((err) => {
            res.status(500).json(err);
        });
};

module.exports = board;