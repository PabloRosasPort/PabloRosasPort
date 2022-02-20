/*Definir un modelo de dato es como definir una tabla
 *Modelo de Dato parecido a una Clase
 */
//Schema--> es la forma en la que se guardan los datos en mongo campos
//Model--> nombre de la

import { Schema, model } from "mongoose";

const proyectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: String,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("proyect", proyectSchema);
