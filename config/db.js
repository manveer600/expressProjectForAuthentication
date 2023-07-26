// db.js
const mongoose = require("mongoose");
(async() =>{
    try{
        await mongoose.connect(process.env.dbUrl);
        console.log('Database connection successfully');
    }catch(error){
        throw new Error("Oops !! Error in connecting to the Database");
    }
})();


