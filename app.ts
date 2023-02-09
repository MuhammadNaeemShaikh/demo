import express from "express";
import { createConnection } from "typeorm";
import { router } from "./routes/routes";
import cors from 'cors'

const app = express();
const port = 4011;
//cors libray to make frontend and backend connection
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


//routes
app.use('/',router)


//connecting database
createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "test",
  synchronize: true,
  entities:['./entity/*.ts'],
  logging:true
}).then(() => {
  console.log("db connected");
  app.listen(port, () => {
    console.log("listeing");
  })
}).catch(err => {
  console.log(err)
})

