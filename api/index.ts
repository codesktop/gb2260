import gb2260 from '@statstic/gb2260'
import express from 'express'

const app = express()
app.use(gb2260.routes())

export default app
