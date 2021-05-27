import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import hbs from 'express-handlebars'
import favicon from 'serve-favicon'
import {Server} from 'socket.io'
import http from 'http'

import router from './router.js'
import registerMessagesHandler from './messagesHandler.js'


const app = express()
const server = http.createServer(app)
const io = new Server(server)
const __dirname = path.resolve()
const port = process.env.PORT || 3000

app.use(cookieParser())

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/js-cookie/src')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/socket.io/client-dist')))

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/svg', express.static(path.join(__dirname, 'node_modules/bootstrap-icons')))

app.engine('hbs', hbs({extname: "hbs"}))
app.set('view engine', 'hbs')

app.use('/', router)

io.on('connection', (socket) => registerMessagesHandler(io, socket))

server.listen(port)