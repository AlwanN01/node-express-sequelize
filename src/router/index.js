import express from 'express'
import * as route from './export'
const router = express.Router()

function logOriginalUrl(req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod(req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

const logStuff = [logMethod, logOriginalUrl]
router.use('/mahasiswa', logStuff, route.mahasiswa)

export default router
