var express = require('express');
var fs = require('fs');
var app = express();

// menentukan direktori publik

app.use('/public', express.static(__dirname + '/public'));

// Judul
app.locals({
  title: 'Belajar ejs template'
});

// Parsing(Mengambil) data yang ada di posts.json

app.all('*', function(req, res, next){
  fs.readFile('posts.json', function(err, data){
    res.locals.posts = JSON.parse(data);
    next();
  });
});

// Route ke index.ejs
app.get('/', function(req, res){
  res.render('index.ejs');
});


app.get('/post/:slug', function(req, res, next){
  res.locals.posts.forEach(function(post){
    if (req.params.slug === post.slug){
      res.render('post.ejs', { post: post });
    }
  })
});

// route api (output json)
app.get('/api/posts', function(req, res){
  res.json(res.locals.posts);
});

// informasi port
app.listen(3000);
console.log('app is listening at localhost:3000');
