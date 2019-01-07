import dbConfig from '../../config/db'
import mongoose from 'mongoose'

import wrapError from '../error/error-helper'

import User from './schemas/user'

class DBWorker {
  constructor() {
    this.dbURL = process.env.DB_URL || dbConfig.url
    mongoose
      .connect(
        this.dbURL,
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useCreateIndex: true
        }
      )
      .then(() => console.log('Successfuly connected to database'))
      .catch((err) => console.error(err))
  }

  getUsers(callback) {
    User.find({}, (err, users) => {
      if (err) {
        callback(wrapError(err, 500))
        return
      }
      const usersToReturn = users.map((user) => {
        return {
          name: user.name,
          score: user.score
        }
      }).sort((a, b) => b.score - a.score)

      callback(usersToReturn)
    })
  }

  addUser(name, callback) {
    User.find({ name }, (err, users) => {
      if (err) {
        callback(wrapError(err, 500))
        return
      }

      if (users.length === 0) {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name,
          score: 0
        })
        user
          .save()
          .then(() => {
            callback(user)
          })
          .catch((err) => {
            // something is wrong
            callback(wrapError(err, 500))
            return
          }
          )
      } else {
        // there is another user with this nickname
        callback(wrapError('Nickname is not available', 409))
        return
      }
    })
  }

  updateUserScore(name, score, callback) {
    User.findOneAndUpdate({ name }, { score }, (err, user) => {
      if (err) {
        callback(wrapError(err, 500))
        return
      }
      
      if (user === null) {
        callback(wrapError('User was not found', 404))
        return
      }

      callback('Successfuly updated user info')
    })
  }
}

const dbWorker = new DBWorker()

export default dbWorker
