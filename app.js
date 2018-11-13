const express = require('express');

// we create our own server named app
// express server handling requests and responses

const app = express();

//make everything inside of public available
app.use(express.static('public'));


//our first route
app.get('/', (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + '/views/home-page.html');
});

//cat route:
app.get('/cat', (req, res, next) => {
  res.sendFile(__dirname + '/views/cat-page.html');
  console.log(__dirname);
});



// server started down here
app.listen(3000, () => {
  console.log('listening now')
});