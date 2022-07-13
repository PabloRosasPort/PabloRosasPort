let controllerHome = {
  home: function (req, res) {
    //ruta raiz carga un archivo
    return res.status(200).render("index");
  },

  test: function (req, res) {
    return res.status(200).send({
      message: "Soy el metodo test del controlador del proyecto",
    });
  },
};
module.exports = controllerHome;
