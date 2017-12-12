'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* 1. CRUD
* 2. JSON return schema
* */

function Board() {
}

Board.prototype.getSingleJob = (job_id) => {
    //Gets a single job defined by job_id
    return new Promise((resolve, reject) => {
        // Currently not testing proximity or ratings for now
        const jobSchema = new Schema({
            restaurant_name: { type: 'String', required: true },
            rating: { type: 'Number', required: false },
            proximity: { type: 'Number', required: false },
            location: { type: 'String', required: true },
            request: { type: 'String', required: true },
            dateAdded: { type: 'Date', default: Date.now, required: true },
            requester: { type: 'String', required: true },
            accepted: { type: 'Boolean', required: true },
            job_id: {type: 'Number', required: true},
        });

        var Job = mongoose.model('Job', jobSchema);
        Job.find({ job_id: job_id}, function (results) {
            resolve(results);
        });
        reject({'message': 'This shit doesnt work'});

        /*
        // EXAMPLE RESULT
        const resultJobDescription = new Schema( {
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
            date: '12-07-2017-1900',
            job_id: 12341512334
        });
        */
    });
};
Board.prototype.getMultipleJobs = (job_amount) => {

     //   Gets job_amount of jobs to fill the board within the hour, sorted in descending order.

    return new Promise((resolve, reject) => {
        const jobSchema = new Schema({
            restaurant_name: { type: 'String', required: true },
            rating: { type: 'Number', required: false },
            proximity: { type: 'Number', required: false },
            location: { type: 'String', required: true },
            request: { type: 'String', required: true },
            dateAdded: { type: 'Date', default: Date.now, required: true },
            requester: { type: 'String', required: true },
            accepted: { type: 'Boolean', required: true },
            job_id: {type: 'Number', required: true},
        });
        var Job = mongoose.model('Job', jobSchema);
        var time= new Date().getTime()-60*60*1000;
        //Example code for my reference for sorting
        //Room.find({}).sort({date: 'descending'}).exec(function(err, docs)
        let resultJob=Job.
            find({ accepted: false }).
            where('dateAdded').greaterThanOrEqual(time).
            limit(job_amount).
            sort({dateAdded: 'descending'}).
            exec();
        resolve(resultJob);
        reject({'message': 'This shit doesnt work'});
    });
};
module.exports = Board;
