const express = require('express')
const gb2260 = require('gb2260-x')
const app = express()

app.use(gb2260.routes())
module.exports = app
