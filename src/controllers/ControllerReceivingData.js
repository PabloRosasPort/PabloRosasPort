import Proyects from "../models/Task";
let receivingData = {
  //Resibiendo datos de la vista POST formulario, y guardando en la db
  postData: async function (req, res) {
    try {
      const task = Proyects(req.body);
      console.log(task);
      await task.save();

      res.redirect("/edit");
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = receivingData;
