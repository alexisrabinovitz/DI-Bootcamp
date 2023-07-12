// EXERCISE: PART 1

// const express = require('express')
// const app = express()

// const PORT = 3001

// function sayHi(req, res) {
//     res.send('Hello')
// }

// app.get('/', sayHi)
// app.listen(PORT, () => {
//     console.log('Listening on port', PORT)
// })

// EXERCISE: 1.1

// const express = require('express')
// const app = express()

// const PORT = 3001

// function sayHi(req, res) {
//     res.send('Hello from Express')
// }

// app.get('/api/hello', sayHi)
// app.listen(PORT, () => {
//     console.log('Listening on port', PORT)
// })

// REFACTORED 

// const express = require('express')
// const cors = require('cors')
// const app = express()

// const PORT = 3001
// app.use(cors())

// app.get('/api/hello', (req, res) => res.send('Hello from Express'))
// app.listen(PORT, () => {
//     console.log('Listening on port', PORT)
// })

// EXERCISE: PART 2 USING SERVER AND CLIENT SIDE 

const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3001
app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => res.send('Hello from Express'))
app.post('/api/world', (req, res) => {
    res.send({
        message: `I recieved your POST request. This is what you sent me: ${req.body.message}`
    })
})
app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})