const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');
const Review = require('../models/reviewModel');
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    tourController.deleteTour
  );

//POST /tour/2478f8g/reviews
//GET /tour/2478f8g/reviews
//GET /tour/2478f8g/reviews/94974ffhgh

router
  .route('/:tourId/reviews')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
