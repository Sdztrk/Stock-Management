const {connect} = require("mongoose");

const connectDB = async () => {
        const res = await connect(process.env.URI)
        console.log(`DB connected to : ${res.connection.host}`.yellow.underline)
    };

module.exports= {connectDB};