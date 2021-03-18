const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());

app.listen("3001", () => {
  console.log("Server running on port 3001🚀");
});
