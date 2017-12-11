'user strict';

let board = {};

board.getSingleJob = (req, res) => {
    const BoardService = require('../../services/board/index');
    return BoardService.prototype.getSingleJob()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
};

module.exports = board;