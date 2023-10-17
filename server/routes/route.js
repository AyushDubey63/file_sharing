import express from 'express'
import { uploadImage ,downloadimage} from '../controller/image-controller.js';
import upload from '../utils/upload.js'
const router = express();
router.post('/upload',upload.single('file'),uploadImage)
router.get('/file/:fileId',downloadimage)

export default router