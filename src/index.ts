const express = require('express');
const cors = require('cors');
import  router  from './routes';

const app = express();
const port = 3000;

// Cors
app.use(function (req: any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors({ origin: true, credentials: true }));

app.use('/', router)

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});