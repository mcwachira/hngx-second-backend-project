import express from 'express';
import config from 'config'
import connect from './utils/connect';
import log from './utils/logger';
const env = process.env.NODE_ENV;

const port = config.get<string>('port')

const app = express();

app.listen(port, async() => {
    log.info(`app running on port ${port}`)

    await connect()
})

