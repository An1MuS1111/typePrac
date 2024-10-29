import express, {Request, Response} from "express";
import './config/database'
import cors from 'cors';
import sequelize from "./config/database";

const app = express();

app.use(cors());
app.use(express.json());



(async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully.');
      await sequelize.sync(); // Syncs models with the database
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();



app.get("/", (req: Request, res: Response)=>{

    

    res.json("Hello");
})







const PORT: number = 4444;
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))
