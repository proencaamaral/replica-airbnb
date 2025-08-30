import "dotenv/config"
import express from 'express';
import UserRoutes from "./domains/users/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";


const App = express();
const { PORT } = process.env;

App.use(express.json());
App.use(cookieParser());
App.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
App.use('/users',UserRoutes)


App.listen(PORT, () => {
    console.log(`o Servidor está rodando na porta ${PORT}`)
});