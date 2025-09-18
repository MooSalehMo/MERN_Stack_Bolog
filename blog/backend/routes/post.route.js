import express from 'express'
import {uploadAuth, createAPost, getAllPosts, getAPost, deleteAPost} from '../controllers/post.controller.js'
const router = express.Router()

router.get("/upload-auth", uploadAuth);
router.get('/', getAllPosts)
router.get('/:slug', getAPost)
router.post('/', createAPost)
router.delete('/:id', deleteAPost)

export default router ;