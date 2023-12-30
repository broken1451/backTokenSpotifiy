const express = require('express');
import  router  from './routes';

const app = express();
const port = 3000;

// Cors
app.use(function (req: any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use('/', router)

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});