import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    } }
    ,
    {
        timestamps: true
    });

const Product = mongoose.model('Product', ProductSchema);
export default Product