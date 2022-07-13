import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import("./database");
const PORTO = 4000;
app.listen(PORTO);
console.log(`Escuchando en el puerto ${PORTO}`);
