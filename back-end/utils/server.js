import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "../routes/index.js"
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';


export const App = express();

export const _filename = fileURLToPath(import.meta.url);
export const _dirname = dirname(_filename);

App.use(express.json());
App.use(cookieParser());
App.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));


App.use("tmp",express.static(_dirname+'/tmp'))
App.use(routes);

