import mongoose from "mongoose";

const ProdectSchema = new mongoose.Schema({
 title:{
        type:String,
        required:[true,"Please enter product name"],
    } ,
    description:{
        type:String,
        required:[true,"Please enter product description"],
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[8,"Price cannot exceed 8 characters"],
        default:0.0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please select category for this product"],
    },
        createdAt:{
            type:Date,
            default:Date.now
        }

    },)
const ProdectModel = mongoose.model("Product", ProdectSchema);
export default ProdectModel;