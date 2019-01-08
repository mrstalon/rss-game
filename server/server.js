import path from 'path'
import express from 'express'
import ejs from 'ejs'
import bodyParser from 'body-parser'

import serverHeadersMiddleware from './middlewares/server-headers'
import logger from './init/bunyan-logger'

import usersRoutes from './api/routes/users'

const PORT = process.env.PORT || 5000
const HOST = '0.0.0.0'
const VIEWS_PATH = path.resolve(__dirname, '../client-dist')
const STATIC_PATH = path.resolve(__dirname, '../client-dist/static')

const app = express()
app.use(serverHeadersMiddleware)
app.use(bodyParser.json({ type: 'application/json' }))
app.use('/static', express.static(STATIC_PATH))

app.engine('html', ejs.renderFile)
app.set('views', VIEWS_PATH)
app.set('view engine', 'html')

app.use('/api/users', usersRoutes)

app.get('/', (req, res) => res.render('index'))

app.use((req, res, next) => {
  const error = new Error('An error occured')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})
// app.get('*', (req, res) => res.render('index'))

app
  .listen(PORT, HOST, () => logger.info(`Aplication server is listening on port ${PORT}.`))
  .on('error', (err) =>
    logger.error(`Failed to start application server, check if ${PORT} port is empty \n`, err)
  )
