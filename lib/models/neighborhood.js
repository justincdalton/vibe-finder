'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Neighborhood Schema
 */
var NeighborhoodSchema = new Schema({
  text: String,
  city: String,
  borough: String
});


mongoose.model('Neighborhood', NeighborhoodSchema);