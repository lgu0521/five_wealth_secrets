const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "five_wealth_secrets_server/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/five_wealth_secrets_server/build/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중..");
});