/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFound'
import router from './app/routes'

const app: Application = express()
app.use(express.json())
app.use(cors())

//application route

app.use('/api/v1/', router)

const test = (req: Request, res: Response) => {
  res.send({
    message: 'API Hitting',
  })
}

app.get('/', test)

app.use(globalErrorHandler)
app.use(notFound)

export default app
