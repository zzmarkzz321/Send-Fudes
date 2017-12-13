'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function Payment(){

}

Payment.prototype.getPaymentInfo = (job_id) => {
    return new Promise((resolve, reject) => {
        if (job_id)
            resolve({'message': 'request received'});
        reject({'message': 'This shit doesnt work'});
    });
};


module.exports= Payment;