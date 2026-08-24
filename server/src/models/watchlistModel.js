import mongoose from 'mongoose'

const watchlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },
    movies: [
      {
        id: {
          type: Number,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        year: String,
        rating: Number,
        genres: [String],
        image: String,
        backdrop: String,
        description: String,
        trailerId: String
      }
    ]
  },
  {
    timestamps: true
  }
)

export const Watchlist = mongoose.model('Watchlist', watchlistSchema)