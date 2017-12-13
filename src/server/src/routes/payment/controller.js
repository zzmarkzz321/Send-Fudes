'user strict';
let payment = {};


payment.getPaymentInfo = (req, res) => {
    const PaymentService = require('../../services/payment/index');
    return PaymentService.prototype.getPaymentInfo()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
};

module.exports = payment;