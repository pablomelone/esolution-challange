require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;


// sección de conexión a la base de datos.
mongoose.connect(mongoString);
const database= mongoose.connection;

database.on("error", (error) => {
    console.error(error);
});

database.once("connected", () => {
    console.log("Base de datos conectada.");
});


//sección de aplicación. (servicio web)
const app = express();
app.use(express.json());

// REVISAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const userRoutes = require("./routes/usersRoutes");
const companiesRoutes = require("./routes/companiesRoutes");

app.use("/api", userRoutes);
app.use("/api", companiesRoutes);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor express ejecutando en http://${process.env.HOST}:${process.env.PORT}/`);
});