// Creo k este es mi *Controlador de Solicitudes archivo
import { Router } from "express";

import Proyects from "../models/Task";

//ruta raiz,  ruta y archivo k carga
const router = Router();
router.get("/", (req, res) => {
  res.status(200).render("index");
});

//obteniendo lista de objetos de la db.
router.get("/edit", async (req, res) => {
  const proyectos = await Proyects.find().lean();

  res.render("edit", { proyectos: proyectos }); //Renderizo y emvio este objeto
});

//Resibiendo datos de la vista POST formulario, y guardando en la db
router.post("/edit", async (req, res) => {
  try {
    const task = Proyects(req.body);
    console.log(task);
    await task.save();

    res.redirect("/edit");
  } catch (error) {
    console.log(error);
  }
});
//cuando visiten esta ruta respondo con el archivo edicion y sus params
//para Actualizar proyectos respondo esta ruta
router.get("/edicion/:_id?", async (req, res) => {
  try {
    var param = req.params._id;

    var projects = await Proyects.findById(param).lean();

    res.render("edicion", { projects: projects }); //respuesta con pramaetros
  } catch (error) {
    console.log(error.message);
  }
});
//Resibo datos actualizados de edicion get
router.post("/edicion/:_op?", async (req, res) => {
  const { _op } = req.params;
  var body2 = req.body;
  await Proyects.findByIdAndUpdate(_op, body2);
  res.redirect("/edit");
});

/*      ------------------------------------------    */

router.get("/About", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});
//Testimonials
router.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});

router.get("/agregar", async (req, res) => {
  const bodys = req.body;
  console.log(bodys);

  res.render("agregar");
});

router.get("/delete/:_id?", async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  var body2 = req.body;
  console.log(body2);
  await Proyects.findByIdAndDelete(_id, body2);
  res.redirect("/edit");
});
// exportamos esta funcion para utilizarlo en otros archivos

export default router;
