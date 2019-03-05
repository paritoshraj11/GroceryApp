import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { findOne } from "./serverUtility";
const app = express();
const PORT = 5000;
//creating hard code data without any database
import productData from "./productData";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  res.json({
    data: productData
  });
});
app.post("/upvote", (req, res) => {
  let { _id } = req.body;
  let data = findOne(productData, _id);
  if (!data) {
    res.json({
      error: "data not found"
    });
  }
  let { votes } = data;
  //if already  like , then votes is 1 otherwise 0
  if (votes) {
    data.votes = 0;
  } else {
    data.votes = 1;
  }
  res.json({
    data: { ...data }
  });
});
app.post("/downvote", (req, res) => {
  let { _id } = req.body;
  let data = findOne(productData, _id);
  if (!data) {
    res.json({
      error: "data not found"
    });
  }
  let { votes } = data;
  //if it is liked then votes is 0
  if (votes) {
    data.votes = 0;
  }
  res.json({
    data: { ...data }
  });
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
