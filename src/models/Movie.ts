import mongoose, { Schema, model } from 'mongoose'

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: Array,
  poster: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export const Movie = model<mongoose.Document>('Movie', movieSchema)