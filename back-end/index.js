import "dotenv/config"
import { App } from "./utils/server.js";



const { PORT } = process.env;

App.listen(PORT, () => {
    console.log(`o Servidor está rodando na porta ${PORT}`)
});