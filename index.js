const express = require('express')
const path = require('path');

// var livereload = require("livereload");
// var connectLiveReload = require("connect-livereload");

// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

const app = express()
const port = 3000

app.use(express.static('assets'))
// app.use(connectLiveReload());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
