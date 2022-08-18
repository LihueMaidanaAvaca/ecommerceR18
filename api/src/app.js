import express from 'express';
import boxesRoutes from './routes/boxes.routes.js'

const app = express();

// middlewares
app.use(express.json())

app.use(boxesRoutes)

export default app;