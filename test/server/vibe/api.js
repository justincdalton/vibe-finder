'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('GET /api/vibes', function() {
  
  it('should respond with JSON array with a length of 6', function(done) {
    request(app)
      .get('/api/vibes')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        res.body.should.have.length(6);
        done();
      });
  });
});