const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('mantap dong!'))

app.listen(port, () => console.log(`Example listening on port ${port}`))