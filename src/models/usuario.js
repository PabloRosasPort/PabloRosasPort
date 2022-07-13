/*Definir un modelo de dato es como definir una tabla
 *Modelo de Dato parecido a una Clase
 */
//Schema--> es la forma en la que se guardan los datos en mongo campos
//Model--> nombre de la
const { Schema, model } = require("mongoose");

const usuariosSchema = new Schema(
  {
    usuario: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
//Nombre de la db que le dara: proyects en plural
module.exports = model("usuario", usuariosSchema);
