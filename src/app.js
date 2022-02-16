import express from "express";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();

//Sirviendo archivos estaticos
app.use(express.static(path.join(__dirname, "./views/layouts")));

app.set("views", path.join(__dirname, "views"));

/*Configurando un motor de plantilla de handelbars*/
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");
//midellware
app.use(indexRoutes);
export default app;
