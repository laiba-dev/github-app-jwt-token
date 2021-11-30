const jwt = require('jsonwebtoken')
const fs = require('fs')

fs.readFile('./laiba-backend-app.2021-11-29.private-key.pem', 'utf-8', (err, data) => {
    //iat
    console.log(data)

    const date = Math.floor(new Date().getTime() / 1000)

    const payload = {
        iat: date - 60,
        exp: date + (10 * 60),
        iss: "APP_ID"
    }

    console.log(payload)
    const jwt_token = jwt.sign(payload, data, { algorithm: 'RS256' })
    console.log(jwt_token)
})