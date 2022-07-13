//*Controlador de Solicitudes *Protocolos de comiuncicacion
import { Router } from "express";

import Proyects from "../models/Task";
import Usuarios from "../models/usuario";

const controllerIndex = require("../controllers/ControllerHome");
const controllerShowdata = require("../controllers/controllerShowData");
const controllerPost = require("../controllers/ControllerReceivingData");
const conUpdate = require("../controllers/controllerUpdate");
const conAdd = require("../controllers/controllerAdds");
const newUpdate = require("../controllers/controllerUpdateData");
const deletePro = require("../controllers/controllerDelete");

const router = Router();

//ruta raiz, pagina de inicio principal
router.get("/", controllerIndex.home);

/*      ------------------------------------------    */
/*      --        Comienza el Crud             --    */
/*      ------------------------------------------    */

//Crear Nuevo Proyecto
router.get("/agregar", conAdd.createNew);

//obteniendo lista de objetos de la db y mostrarlos en la vista.
router.get("/edit", controllerShowdata.showData);

//Resibiendo datos de la vista POST formulario, y guardando en la db
router.post("/edit", controllerPost.postData);

//cuando visiten esta ruta respondo con el archivo edicion y sus params
//Editar para actualizar proyecto
router.get("/edicion/:_id?", conUpdate.updateData);

//Resibo datos actualizados de edicion get
router.post("/edicion/:id", newUpdate.updateDat);

//borrar registros
router.get("/delete/:_id?", deletePro.deleteProject);
/*      ------------------------------------------    */
/*         --     termina el Crud    */
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

//ruta para subir archivo
router.get("/profile/:_id?", async (req, res) => {
  var param5 = req.params._id;
  console.log(`Es el ID get/profile ${param5}`);

  var projects3 = await Proyects.findById(param5).lean();

  res.render("formfile", { projects: projects3 });
});
//Subir Archivos al servidor
router.post("/profile/:_1id?", async (req, res) => {
  var projectId = req.params._1id;

  console.log(projectId);

  res.render("update");
});
//WelcomeUser Get
router.get("/welcomeUser", (req, res) => {
  res.render("welcomeUser");
});

//WelcomeUser Post guardando datos de usuario
router.post("/welcomeUser", async (req, res) => {
  try {
    const welcome = Usuarios(req.body);
    console.log(welcome);
    await welcome.save();

    res.redirect("/welcomeUser");
  } catch (error) {
    console.log(error);
  }
});

// exportamos esta funcion para utilizarlo en otros archivos

export default router;
