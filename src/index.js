import app from "./app";
import("./database");
const Port = 3400;
app.listen(Port);
console.log(`Escuchando en el puerto ${Port}`);
