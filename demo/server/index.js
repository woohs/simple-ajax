const express = require('express');
const app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/', (req, res) => {
  console.log('get')
  res.json({
    status: true,
    code: 200,
  })
});

app.post('/', (req, res) => {
  console.log('post')
  res.json({
    status: true,
    code: 201,
  })
});

app.listen(9100, () => {
  console.log('应用正在监听 9100 端口!');
});