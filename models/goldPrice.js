import mongoose, {Schema} from "mongoose";

const goldPriceSchema = new Schema({
    date : {
        type : Date,
        required : true
    },
    open : Number,
    high : Number,
    low : Number,
    close : Number,
    volume : Number
})

const GoldPrice = mongoose.model('goldprices', goldPriceSchema)

export default GoldPrice
