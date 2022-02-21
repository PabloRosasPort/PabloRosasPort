// Creo k este es mi *Controlador de Solicitudes archivo
import { Router } from "express";
import Proyects from "../models/Task";

const router = Router();
router.get("/", (req, res) => {
  res.status(200).render("index");
});
//obteniendo lista de objetos de la db.
router.get("/edit", async (req, res) => {
  const proyectos = await Proyects.find().lean();

  res.render("edit", { proyectos: proyectos });
});
//Resibiendo datos de la vista y guardando en la db
router.post("/edit", async (req, res) => {
  const task = Proyects(req.body);

  await task.save();

  res.redirect("/edit");
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
