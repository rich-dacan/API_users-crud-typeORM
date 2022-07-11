import express, { NextFunction, Request, Response } from 'express'
import userRouter from './routes/user.routes'
import { AppError } from './errors/appError'

const app = express()

app.use(express.json())

app.use('/users', userRouter)

app.use(( err: Error, req: Request, res: Response, _: NextFunction ) => {
  if (err instanceof AppError) {
    return res.status(err.statuscode).json({
      status:  "error",
      message: err.message
    })
  }

  console.error(err);

  res.status(500).json({
    status: "error",
    message: "Internal server error"
  })
  
})

app.listen(3000, () => {
  console.log("Server is running in port 3000")
})
