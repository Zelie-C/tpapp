import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config'
import {writeJsonSync } from "fs-extra";
import path from "path";

const app = express();
const port = parseInt(process.env.PORT as string);
let arrayNames: string[] = [];

function hellosjson (array: string[]) {
  writeJsonSync('./src/server/hellos.json', array)
}

app.get("/hello/:name", (req, res) => {
  let name: string = req.params.name.toString()
  arrayNames.push(name)
  res.send(`Hello ${name}`);
  hellosjson(arrayNames);
});

app.get('/hellos', (_, res) => {
  res.sendFile('./hellos.json', { root: path.resolve(__dirname, './')})
})

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`)
);
