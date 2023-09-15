import mongoose from "mongoose";
import config from 'config'


const dbUri = config.get<string>('dbUri')


const connect = async () => {

    try{
        await  mongoose.connect(dbUri)
    } catch(error) {
        console.log('could not connect to  db')
        process.exit(1)    
    
    }
}

export default connect