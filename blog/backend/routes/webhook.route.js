import express from "express"; 
import { clerkWebHook } from '../controllers/clerkWebhook.controller.js';
import bodyParser from 'body-parser';

const router = express.Router()

router.post('/clerk' , bodyParser.raw({ type: 'application/json' }) , clerkWebHook  )

export default router;

