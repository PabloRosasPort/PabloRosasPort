import Proyects from "../models/Task";
//Resibo datos actualizados de edicion get
let newUpdateData = {
  updateDat: async function (req, res) {
    const op = req.params.id;
    var body2 = await req.body;
    //console.log(body2);
    var lele = await Proyects.findByIdAndUpdate(op, body2);
    //console.log(lele);
    res.redirect("/edit");
  },
};
module.exports = newUpdateData;
