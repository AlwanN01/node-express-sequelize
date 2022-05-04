import express from 'express'
import { mahasiswa } from '#control'
import multer from 'multer'
import { normalize } from 'path'
const router = express.Router()
//upload with file original name
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, normalize('./public/image'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })
router.get('/', mahasiswa.getAll)
router.get('/search', mahasiswa.getSearch)
router.get('/:nim', mahasiswa.getOne)
router.post('/', upload.single('foto'), mahasiswa.create)
router.put('/:nim', multer().none(), mahasiswa.update)
router.delete('/:nim', mahasiswa.deleteOne)
export default router
