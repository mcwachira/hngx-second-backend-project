
import dotenv from "dotenv";
dotenv.config(); // this loads the defined variables from .env



export default {
   port: process.env.port,
   dbUri: process.env.MONGO_URI,
   saltWorkFactor: 10,
   accessTokenTtl: "15m",
   refreshTokenTtl: "1y",
   accessTokenPrivateKey: ``,
   accessTokenPublicKey: ``,
   refreshTokenPrivateKey: ``,
   refreshTokenPublicKey: ``,
 };