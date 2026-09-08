const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(
  express.static(path.join(__dirname, "public"), {
    index: "hello-world.html",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Content-Type", "application/vnd.hbbtv.xhtml+xml; charset=utf-8");
      }
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});