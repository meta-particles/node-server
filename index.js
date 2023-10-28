import express from "express";
import cors from "cors";
import imageRouter from "./router/imageRouter.js";
import { db } from "./dbCon.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use("/", imageRouter);

const port = 8000;
db.connect((err) => {
  if (err) {
    console.log("Connection is not possible!");
    console.log(err);
  } else {
    db.ping((err) => {
      if (err) return res.status(500).send("MySQL Server is Down");
      app.listen(port, () => {
        console.log("Server is running at " + port + "!!...");
      });
    });
  }
});
