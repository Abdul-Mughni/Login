const mongoose = require("mongoose");

const ConnectDB = async () => {
    try{
        const Conn = await mongoose.connect(process.env.DB);
        console.log("MONGODB CONNECT SUCCESSFULLY");
        return Conn;
    } catch (error) {
        console.error("ERROR connect to MongoDB" , error);
        process.exit(1)
    }
};

module.exports = ConnectDB;