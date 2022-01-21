const express = require('express');
const app1 = express();
const app2 = express();

app1.get('/hello', (req, res) => {
  res.send('hello douglas Mogoba');
});

app2.get('/server', (req, res) => {
  res.send('Now you know what you are doing');
});

app1.listen(3000, () => {
  console.log('started on 3000');
});

app2.listen(3001, () => {
  console.log('started on 3001');
});
