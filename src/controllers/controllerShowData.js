import Proyects from "../models/Task";

let controllerShowData = {
  showData: async function (req, res) {
    //obteniendo lista de objetos de la db y mostrarlos en la vista.
    const proyectos = await Proyects.find().lean();
    res.render("edit", { proyectos: proyectos }); //Renderizo y emvio este objeto
  },
};

module.exports = controllerShowData;
