import express from 'express'
import morgan from 'morgan'
import router from '#root/router'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(morgan('dev')) // menggunakan morgan untuk menampilkan log
app.use(express.urlencoded({ extended: true })) // menggunakan bodyParser untuk mengambil data dari form
app.use(express.json()) // menggunakan bodyParser untuk mengambil data dari json
app.use(cookieParser())
app.use(express.static('public'))
app.use(router)

app.use((req, res, next) => {
  const error = new Error('Not Found Bro')
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
export default app
