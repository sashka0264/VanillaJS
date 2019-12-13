const fs = require("fs");
const path = require("path");
// FILE SYSTEM
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err
//   }
//   console.log("Папка создана");
// });
// Создание новой папки

const filePath = path.join(__dirname, "test", "text.txt");
// fs.writeFile(filePath, "Hello NodeJS", err => {
//   if (err) {
//     throw err
//   }
//   console.log("Файл создан");
// })
// writeFile полностью перезаписывает файл, а mkdir не может
fs.appendFile(filePath, "\nHello NodeJS again", err => {
  if (err) {
    throw err
  }
  console.log("В файл дописана фраза");
});

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err
  }

  // const data = Buffer.from(content);
  // console.log(data.toString());
  console.log(content)
})
// считывает файл и выводит содержимое