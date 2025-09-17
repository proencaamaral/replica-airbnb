import { Router } from "express";
import Place from "./model.js"
import { JWTVerify } from "../../utils/jwt.js";
import { connectDb } from "../../config/db.js";
import { downloadImage } from "../../utils/imageDownloader.js";
import { _dirname } from "../../server.js";
import { fileURLToPath } from "url";

const router = Router();

router.post("/", async (req, res) => {
    connectDb();

    const {
        title,
        city,
        photoLink,
        description,
        extras,
        perks,
        price,
        checkin,
        checkout,
        guests,
    } = req.body

    try {
        const { _id: owner } = await JWTVerify(req);

        const newPlaceDoc = await Place.create({
            owner,
            title,
            city,
            photoLink,
            description,
            extras,
            perks,
            price,
            checkin,
            checkout,
            guests,
        });

        res.json(newPlaceDoc);
    } catch (error) {
        console.error(error)
        res.status(500).json("Deu erro ao criar o novo lugar")
    }

});

router.post("/upload/link", async (req, res) => {
    const { link } = req.body;

    try {
        const filaname = await downloadImage(link, `${_dirname}/tmp/`);

        res.json(filaname);
    } catch (error) {
        console.error(error);
        res.json(500).json("Deu erro ao baixar a imagem ! ")

    }

});

export default router;