
import express from 'express'
import mongoose from 'mongoose'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server,{cors:{origin:'*'}})

mongoose.connect('mongodb://127.0.0.1:27017/knot')

app.use(express.json())

io.on('connection',socket=>{
  socket.on('message',msg=>{
    io.emit('message',msg)
  })
})

server.listen(4000)
