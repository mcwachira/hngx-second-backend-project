import express from 'express';
import config from 'config'
import connect from './utils/connect';
const env = process.env.NODE_ENV;

const port = config.get<string>('port')

console.log(port)
const app = express();

app.listen(port, async() => {
    console.log(`app running on port ${port}`)

    await connect()
})

