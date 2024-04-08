const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8080

express()
 // .use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, '/'))
  //.set('view engine', 'html')
 // .engine('html', require('ejs').renderFile)
  .get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
