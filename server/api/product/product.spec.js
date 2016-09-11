'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var expect = require('chai').expect;

describe('GET /api/things', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/things')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

  describe('#cenas', function() {
          it('should make something..', function() {
              expect('something').to.be.a('string');// put your own 'assert'/'expect' here
          });
          // put more 'it' here if you need
  
      });
