import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// app.use(morgan("combined"))

let logger  = (req, res, next)=>{
  console.log("Request Method", req.method);
  console.log("Requested url", req.url);
  console.log("Requested boby", req.body);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
