const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const clientRoutes = require("./routes/client");

const app = express();
const port = 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use("/api", clientRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("Estas comunicandote con mi API")
});

//mongodb connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("server listenin on port", port))