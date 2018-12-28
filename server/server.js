import path from 'path'

import express from 'express'
import ejs from 'ejs'
import bodyParser from 'body-parser'

import serverHeadersMiddleware from './middlewares/server-headers'
import logger from './init/bunyan-logger'

const app = express()

const PORT = process.env.PORT || 5000
const HOST = '0.0.0.0'
const VIEWS_PATH = path.resolve(__dirname, '../client-dist')
const STATIC_PATH = path.resolve(__dirname, '../client-dist/static')

app.use(serverHeadersMiddleware)
app.use(bodyParser.json({ type: 'application/json' }))

app.engine('html', ejs.renderFile)
app.set('views', VIEWS_PATH)
app.set('view engine', 'html')

app.use('/static', express.static(STATIC_PATH))

app.get('/', (req, res) => res.render('index'))

app.get('/api/servicelist', (req, res) => {
  res.json([
    {
      name: 'Artem'
    },
    {
      name: 'Egor'
    }
  ])
})

app.get('*', (req, res) => res.render('index'))

app
  .listen(PORT, HOST, () => logger.info(`Aplication server is listening on port ${PORT}.`))
  .on('error', (err) =>
    logger.error(`Failed to start application server, check if ${PORT} port is empty \n`, err)
  )
