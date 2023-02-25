
const fs = require ('fs')

const data = fs.readFileSync('./libros.json', "utf8");

// const libros = JSON.stringify(data)
const libros = JSON.parse(data)

console.log(libros);