const {Schema, model} = require("mongoose")


const saleSchema = new Schema(
    {
        userId:{
            type:Schema.ObjectId,
            ref:"Users",
            required:true,
        },
        brandId:{
            type:Schema.ObjectId,
            ref:"Brands",
            required:true,
        },
        productId:{
            type:Schema.ObjectId,
            ref:"Products",
            required:true,
        },
        quantity:{
            type:Number,
            trim:true,
            required:true,
        },
        price:{
            type:Number,
            trim:true,
            required:true,
        },
        priceTotal:{
            type:Number,
            trim:true,
            required:true,
        },
    },
    {
        timestamps:true,
    }
)

module.exports = model("Sales", saleSchema)
