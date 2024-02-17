var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const exam = require('./models/exam');
const { updateSearchIndex } = require('./models/exam');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

//exam creation endpoint
app.post("/api/exams",(req,res) =>{
  const newExam = new exam ({
    examID: req.body.examID,
    patientID:req.body.patientID,
    date:req.body.date,
    keyFindings:req.body.keyFindings,
    brixiaScore:req.body.brixiaScore,
    imageURL:req.body.imageURL
    });
  newExam.save()
    .then((savedExam) => {res.status(201).json({message:"Exam created",exam: savedExam})});
    .catch((error) => {
      console.error(error);
      res.status(500).json({message: "Error creating Exam"});
    });

});
  


module.exports = app;
