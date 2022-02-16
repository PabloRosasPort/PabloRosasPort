// Creo k este es mi *Controlador de Solicitudes archivo
import { Router } from "express";

const router = Router();
const Port = 3000;

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/About", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});
// exportamos esta funcion para utilizarlo en otros archivos

export default router;
