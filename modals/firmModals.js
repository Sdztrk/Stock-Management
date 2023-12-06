const {Schema, model} = require("mongoose")


const firmSchema = new Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true,
        },
        phone:{
            type:String,
            trim:true,
            required:true,
        },
        address:{
            type:String,
            trim:true,
            required:true,
        },
        image:{
            type:String,
            trim:true,
            required:true,
        },
        
    },
    {
        timestamps:true,
    }
)

module.exports = model("Firms", firmSchema)
