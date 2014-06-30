# Vibe Finder

A simple app using the Yelp api to help you find your place. Select your Vibe, select your desired neighborhood, and Find your Vibe.

### Prerequisites

* Node.js - The app is built on node.js, so you will definitely need it installed
* MongoDB - You will need MongoDB installed in order to run this app
* Grunt - Grunt is used to easily build and run the app
* Bower - Bower makes it easy to get all of the required vendor scripts

### Tech Stack Overview

The Vibe Finder app uses node.js for server side code which is exposed through an Express api controller. MongoDB is on the backend and the app will set up some sample data in the db when it starts up.

AngularJS is handles the client side javascriopt work, while bootstrap is used to provide the css and a simple layout.

### Build and Run

Getting the app running is very easy. First setup the node.js components:

```
npm install
```

Next pull down the vendor scripts with bower:

```
bower install
```

And finally run the app with grunt:

```
grunt serve
```

### Run Tests

Running tests on the app is easy as well:

```
grunt test
```

### Next Steps

* UI
* Location awareness
* Save places
* Personal selections and overviews
