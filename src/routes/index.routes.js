// Creo k este es mi *Controlador de Solicitudes archivo
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/task-add", (req, res) => {
  res.send("agregar tarea");
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
