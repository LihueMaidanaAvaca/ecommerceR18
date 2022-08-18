import { Router } from "express";
import { 
    createBox, 
    getBoxes, 
} from "../controllers/boxes.controller.js";

const router = Router()

router.get('/boxes', getBoxes)
router.post('/boxes', createBox)
router.put('/boxes/:id')
router.delete('/boxes/:id')
router.get('/boxes/:id')

export default router