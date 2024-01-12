const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;
// const dbHOST="mongodb+srv://clusternew:clusternew%401234e@clusternew.bijipr5.mongodb.net/";
mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })