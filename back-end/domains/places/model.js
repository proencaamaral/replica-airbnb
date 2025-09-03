import { model, Schema, SchemaType } from 'mongoose'

const placeSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    title: String,
    city: String,
    photoLink: [String],
    description: String,
    extras: String,
    perks: [String],
    price: Number,
    checkin: String,
    checkout: String,
    guests: Number,
});

export default model("Place", placeSchema)