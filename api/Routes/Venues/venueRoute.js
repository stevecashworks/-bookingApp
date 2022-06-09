const express= require('express');
const {getAllVenues,addVenue,addBooking, getVenue}= require('./venueController.js');
const bookingRoute= express.Router();
bookingRoute.route('/').get(getAllVenues);
bookingRoute.route('/add').post(addVenue);
bookingRoute.route('/addbooking/:id').post(addBooking)
bookingRoute.route('/:id').get(getVenue)
 module.exports=bookingRoute