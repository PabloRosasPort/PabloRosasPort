let projectAdd = {
  createNew: async function (req, res) {
    const bodys = req.body;
    //console.log(bodys); //Muestro el cli el objeto k me envia el navegador
    res.render("agregar");
  },
};

module.exports = projectAdd;
