const { default: nextServer } = require("next/dist/server/next");
const express = require("express");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const creds = require("./tedx-dtu-firebase-adminsdk-creds.json");
require("dotenv").config();
const port = 3000 || process.env.PORT;

const APIRouter = require("./routes/api/apis");

const nextApp = nextServer({
  dev: true,
  customServer: true,
  port: port,
});

nextApp
  .prepare()
  .then(async () => {
    const app = express();
    // console.log(process.env.DB_URL);
    //   cl
    console.log(process.env.DB_URL);
    const db = await mongoose.connect(process.env.DB_URL);
    console.log(mongoose.connection.readyState);

    admin.initializeApp({
      credential: admin.credential.cert(creds),
    });
    const server = app.listen(port, () => {
      console.log("Port is listening on: " + port);
    });

    // Serving static files from "public" directory
    app.use(express.static("public"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", APIRouter);

    app.all("*", async (req, res) => {
      nextApp.render(req, res, req.path);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
