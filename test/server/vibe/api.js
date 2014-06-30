'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest'),
    agent = request.agent(app);


describe('Controller: api', function() {

  describe('GET /api/vibes', function() {
    
    it('should respond with JSON array', function(done) {
      agent
        .get('/api/vibes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          done();
        });
    });
  });

  describe('GET /api/neighborhoods', function() {
    
    it('should respond with JSON array', function(done) {
      agent
        .get('/api/neighborhoods')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Array);
          done();
        });
    });
  });

  describe('GET /api/places', function() {
    
    it('should respond with missing params error', function(done) {
      agent
        .get('/api/places')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          res.body.statusCode.should.equal(400);
          done();
        });
    });

    it('should respond with JSON Object', function(done) {
      agent
        .get('/api/places?vibe=Cool&neighborhood=Manhattan')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.instanceof(Object);
          res.body.length.should.equal(3);
          done();
        });
    });
  });
});