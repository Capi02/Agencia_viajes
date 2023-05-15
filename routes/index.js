import express from "express";
import { paginaInicio } from "../controllers/paginaController.js";

const router = express.Router();

router.get("/inicio", paginaInicio);

router.get("/nosotros", (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render("nosotros",{
        pagina: "Nosotros",
    })
})

router.get("/viajes", (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render("viajes",{
        pagina: "Viajes",
    })
})

router.get("/testimoniales", (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render("testimoniales",{
        pagina: "Testimoniales",
    })
})



export default router;
