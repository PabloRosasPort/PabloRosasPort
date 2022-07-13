import Proyects from "../models/Task";

let update = {
  //cuando visiten esta ruta respondo con el archivo edicion y sus params
  //Actualizamos proyecto
  updateData: async function (req, res) {
    try {
      var param = req.params._id;

      var projects = await Proyects.findById(param).lean();
      //console.log(projects);
      res.render("edicion", { projects: projects }); //respuesta con pramaetros
    } catch (error) {
      console.log(error.message);
    }
  },
};
module.exports = update;
