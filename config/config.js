const mongoose = require("mongoose");
require("colors");

// connectDB Function
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{

        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.bgYellow);
    } catch (error) {
        console.log(`Error: ${error.message}`.bgRed);
        process.exit(1);
    }
};

// Export
module.exports = connectDb;
