import express from 'express';
import { addTask } from './tasksService.js'

import { expressjwt, ExpressJwtRequest } from "express-jwt";

const app = express()
const port = 3000

app.post('/login', async (req, res) => {
  
})

app.post('/tasks', async (req, res) => {
  return await res.json(addTask(req.body))
})

// TODO: The remaining CRUD here

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
