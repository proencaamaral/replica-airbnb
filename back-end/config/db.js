import "dotenv/config"
import mongoose from "mongoose"

const { MONGO_URL } = process.env;

export const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Conexão com banco de dados OK!")

    } catch (erro) {
        console.log("Erro ao conectar com banco de dados! ", erro)
    };

};

connectDb();


