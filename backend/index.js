import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
connectDB();

//fix to "req.body undefined"
//(because we use Express@4 - https://akhromieiev.com/req-body-undefined-express/)

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//configure cors, all origins for test
app.use(cors({ origin: '*' }));

//Routing
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
