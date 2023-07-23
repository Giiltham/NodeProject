import mongoose, {Schema} from "mongoose";

const goldPriceSchema = new Schema({
    id : {
        type : Date,
        required : true,
    },
    open : {
        type : Number,
        required : true
    },
    high : Number,
    low : Number,
    close : Number,
    volume : Number
})

const GoldPrice = mongoose.model('goldprices', goldPriceSchema)

export default GoldPrice
