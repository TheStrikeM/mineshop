const express = require('express');
var cors = require('cors')

const app = express();
const server = require('http').Server(app);
app.use(cors());

app.get('/assets/:name', (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml')
    res.sendFile(__dirname + '/src/assets/' + req.params.name)
});

server.listen(9999, (err) => {
    if(err) {
        throw Error(err);
    } else {
        console.log("Локальный сервер с изображениями успешно запущен.")
    }
});