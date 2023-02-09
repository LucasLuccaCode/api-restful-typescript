import { Schema, model } from 'mongoose'

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
  stars: {
    type: Array,
    required: true
  },
  poster: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export const Movie = model('Movie', movieSchema)