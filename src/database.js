const mongoose = require("mongoose");

const server = '127.0.0.1:27017'; 
const database = 'companydb'; 

mongoose
    .connect(`mongodb://${server}/${database}`)
        .then(db => console.log('DB is connected'))
        .catch(error => console.log("error:"+ error))