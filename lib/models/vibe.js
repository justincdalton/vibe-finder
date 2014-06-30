'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Neighborhood Schema
 */
var VibeSchema = new Schema({
  text: String
});


mongoose.model('Vibe', VibeSchema);