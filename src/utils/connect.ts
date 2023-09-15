import mongoose from "mongoose";
import config from 'config'

import log from "./logger";


const dbUri = config.get<string>('dbUri')


const connect = async () => {

    try{
        await  mongoose.connect(dbUri)

    } catch(error) {
      log.error('could not connect to  db')
        process.exit(1)    
    
    }
}

export default connect