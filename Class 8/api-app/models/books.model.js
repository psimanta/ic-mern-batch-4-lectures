const { match } = require("assert");
const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Book title is missing!"],
    trim: true,
    minLength: 5,
    maxLength: [30, "Maximum title length is 10"],
  },
  ISBN: {
    type: String,
    required: [true, "ISBN is required!"],
    unique: true,
    match: [/^\d{3}-\d{10}$/, "ISBN must follow the format 'XXX-XXXXXXXXXX'"],
  },
  genre: {
    type: String,
    enum: ["Fiction", "Thriller", "Sci-Fi"],
    // required: [true, "Genre is required!"],
    default: "Fiction",
  },
  publicationDate: {
    type: Date,
    default: Date.now(),
  },
  available: Boolean,
  languages: {
    type: [String],
    default: ["English"],
  },
  rating: {
    type: Number,
    // min: 0,
    // max: 5,
    required: true,
    validate: {
      validator: (v) => v >= 0 && v <= 5,
      message: (props) =>
        `Rating must be between 0 to 5! Your given value is ${props.value}`,
    },
  },
  reviews: [
    {
      reviewer: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
});

const Book = model("Book", bookSchema);

module.exports = {
  Book,
};
