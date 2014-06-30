'use strict';

var mongoose = require('mongoose'),
  Neighborhood = mongoose.model('Neighborhood'),
  Vibe = mongoose.model('Vibe');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Vibe.find({}).remove(function() {
  Vibe.create(
    { text : "Local Watering Hole" },
    { text : "Study Session" },
    { text : "Writer's Sanctuary" },
    { text : "Party!" },
    { text : "Quiet Conversation" },
    { text : "Speakeasy" },
    { text : "Cozy" },
    { text : "Romantic" }, function() {
      console.log('finished populating vibes');
    }
  );
});


Neighborhood.find({}).remove(function() {
    Neighborhood.create(
    {
      text : "Alphabet City",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Battery Park",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Chelsea",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Chinatown",
      city : "New York, NY",
      borough : "Manhattan"
    }, 
    {
      text : "Civic Center",
      city : "New York, NY",
      borough : "Manhattan"
    }, 
    {
      text : "East Harlem",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "East Village",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Financial District",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Flatiron",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Gramercy",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Greenwich Village",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Harlem",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Hell's Kitchen",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Inwood",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Kips Bay",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Koreatown",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Little Italy",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Lower East Side",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Manhattan Valley",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Marble Hill",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Meatpacking District",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Midtown East",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Midtown West",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Morningside Heights",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Murray Hill",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "NoHo",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Nolita",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Roosevelt Island",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "SoHo",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "South Street Seaport",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "South Village",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Stuyvesant Town",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Theater District",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "TriBeCa",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Two Bridges",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Union Square",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Upper East Side",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Upper West Side",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Washington Heights",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "West Village",
      city : "New York, NY",
      borough : "Manhattan"
    },
    {
      text : "Yorkville",
      city : "New York, NY",
      borough : "Manhattan"
    }, function() {
      console.log('finished populating neighborhoods');
    }
  );
});



