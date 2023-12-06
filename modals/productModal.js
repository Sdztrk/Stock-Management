const {Schema, model} = require("mongoose")


const productSchema = new Schema(
    {
        categoryId:{
            type:Schema.ObjectId,
            ref:"Categories",
            required:true,
        },
        brandId:{
            type:Schema.ObjectId,
            ref:"Brands",
            required:true,
        },
        name:{
            type:String,
            trim:true,
            required:true,
        },
        quantity:{
            type:Number,
            trim:true,
            required:true,
        },
        
    },
    {
        timestamps:true,
    }
)

module.exports = model("Products", productSchema)
