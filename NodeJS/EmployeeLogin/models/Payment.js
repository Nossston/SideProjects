const mongoose = require('mongoose');

const Payments = mongoose.Schema;

const PaymentSchema = new Payments({
    paymentID: 
    {
        type: String,
        required: true
    },    
    amount: 
    {
        type: Number,
        required: true
    },
    date: 
    {
        type: Date,
        required: true
    },
    method: 
    {
        type: String
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;