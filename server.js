const { default: nextServer } = require("next/dist/server/next");
const express = require("express");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const creds = require("./tedx-dtu-firebase-adminsdk-creds.json");
const helmet = require("helmet");
const cors = require("cors");
const port = 3000 || process.env.PORT;

const APIRouter = require("./routes/api/apis");

const nextApp = nextServer({
    dev: true,
    // dev: false, For Production Only
    customServer: true,
    port: port,
});

nextApp
    .prepare()
    .then(async () => {
        const app = express();

        // Serving static files from "public" directory
        app.use(express.static("public"));

        // Body Parser
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // Helmet (Server Protection) Use in Production only
        // app.use(helmet());
        // Cross Origin Resource Sharing
        app.use(cors());

        await mongoose.connect(process.env.DB_URL);

        admin.initializeApp({
            credential: admin.credential.cert(creds),
        });

        const server = app.listen(port, () => {
            console.log("Port is listening on: " + port);
        });

        // API Router
        app.use("/api", APIRouter);

        // Routes
        app.all("*", async (req, res) => {
            nextApp.render(req, res, req.path);
        });
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });
