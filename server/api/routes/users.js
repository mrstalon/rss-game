import express from 'express'

import dbWorker from '../data-base/DBWorker'

const router = express.Router()

const sendResponse = (res, data) => {
  const statusCode = (data.error && data.error.statusCode) || 200
    
  if (data.error && data.error.message) {  
    res.statusMessage = data.error.message
    res.status(statusCode).send()
  } else {
    res.status(statusCode).json(data)
  }
}

router.get('/', (req, res, next) => {
  dbWorker.getUsers((data) => {
    sendResponse(res, data)
  })
})

router.post('/', (req, res) => {
  const name = req.body.name
  dbWorker.addUser(name, (data) => {
    sendResponse(res, data)
  })
})

router.patch('/', (req, res) => {
  const name = req.body.name
  const score = req.body.score
  dbWorker.updateUserScore(name, score, (data) => {
    sendResponse(res, data)
  })
})

export default router