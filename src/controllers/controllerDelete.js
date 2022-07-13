import Proyects from "../models/Task";

let borrarProyecto = {
  deleteProject: async function (req, res) {
    const { _id } = req.params;
    var body2 = req.body;
    //console.log(body2);
    await Proyects.findByIdAndDelete(_id, body2);
    res.redirect("/edit");
  },
};
module.exports = borrarProyecto;
