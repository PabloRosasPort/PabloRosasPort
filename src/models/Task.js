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
      trim: String,
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: String,
    },
    lang: {
      type: String,
      required: true,
      trim: String,
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
//Nombre de la db que le dara: proyects en plural
export default model("proyect", proyectSchema);
