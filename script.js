const express = require('express');
const path = require('path');
const cors = require('cors');
const { downloadVideo } = require('./cover-ai-handler/handlerCover_AI');



// console.log(path);
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }))

  


app.post('/download-vedio', downloadVideo)


console.log(path.join(__dirname, 'video/'));



app.listen(5000, () => {
    console.log('server is running');
})
