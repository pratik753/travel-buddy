const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorCountroller');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const app = express();
const cors = require('cors');
const reviewRouter = require('./routes/reviewRoutes');
console.log(process.env.NODE_ENV);
// 1) GLOBAl MIDDLEWARES

// set security HTTP header
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// limiting the request
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour!',
});
app.use('/api', limiter);
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.use(cors());

//Serving static files
// app.use(express.static('./public'));

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});
//3) routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'Fail',
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;

// app.param('id', tourController.checkID);
// app.use((req, res, next) => {
//   console.log('Hello form middleware...');
//   req.requestTime = new Date().toISOString();
//   console.log(new Date().toISOString());
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Hello form middleware...');
//   next();
// });

// app.param('id', (req, res, next, val) => {
//   console.log(`This is ${val}`);
// });

// app.post('/', (req, res) => {
//   res.send('You can post to the endpoint...');
// });

// app.post('/api/v1/tours', (req, res) => {
//   console.log(req.body);
//   res.send('Done');
// });

//tours
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
