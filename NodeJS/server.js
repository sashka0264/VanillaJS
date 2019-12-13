const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
  const errorPath = path.join(__dirname, "public", "error.html");
  const ext = path.extname(filePath);
  let contentType = "text/html";

  switch (ext) {
    case ".css": 
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    default: 
      contentType = "text/html";
  }

  if (!ext) {
    filePath += ".html"
  }
  // если расширение файла не указано, то делаем .html
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(errorPath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error");
        } else {
          res.writeHead(200, {'Content-Type': contentType});
          res.end(data);
        }
      })
    } else {
      res.writeHead(200, {'Content-Type': contentType});
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;
// если порта нет, то ставим дефолтный 3000
  
server.listen(PORT, () => {
  console.log(`server has been started on ${PORT}`);
});