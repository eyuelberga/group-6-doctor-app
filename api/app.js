var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const examsRouter = require('/api/exams');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const db = require('/db.js');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/exams',examsRouter);


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//db connection prior to server start
(async()=>{
  try{
    await db.connect();
    app.listen(9000,() =>{
      console.log('Server listening on port 9000');
    });
  }catch(someError){
    console.someError('Error establishing connection to MongoDB database.',someError.message);
  }
})();
   

  


module.exports = app;
