// Creo k este es mi *Controlador de Solicitudes archivo
import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/task/add", (req, res) => {
  const task = Task(req.body);

  console.log(task);

  res.send("guardado-bien chido");
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
