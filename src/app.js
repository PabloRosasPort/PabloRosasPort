import express from "express";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

//Sirviendo archivos estaticos
app.use(express.static(path.join(__dirname, "./views/layouts")));

//diciendo a express donde esta la carpeta views
app.set("views", path.join(__dirname, "views"));

/*Configurando un motor de plantilla de handelbars*/
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.use(morgan("dev"));
app.set("view engine", ".hbs");
//midellware
app.use(indexRoutes);
export default app;
