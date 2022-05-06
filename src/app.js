import express from 'express'
import morgan from 'morgan'
import router from '#root/router'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../apidocs.json'
const app = express()
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(helmet())
app.use(cors())
app.use(morgan('dev')) // menggunakan morgan untuk menampilkan log
app.use(express.urlencoded({ extended: true })) // menggunakan bodyParser untuk mengambil data dari form
app.use(express.json()) // menggunakan bodyParser untuk mengambil data dari json
app.use(cookieParser())
app.use(express.static('public'))
app.use(router)

export default app
