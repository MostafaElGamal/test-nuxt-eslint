import * as express from 'express'
import httpClients from '../plugins/httpClients'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', async (_, res) => {
  try {
    const commentsRes = await httpClients().get(
      'https://jsonplaceholder.typicode.com/comments'
    )
    res.json(commentsRes.data)
  } catch (error) {}
})

export default {
  path: '/api',
  handler: app,
}
