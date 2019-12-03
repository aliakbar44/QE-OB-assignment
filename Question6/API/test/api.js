var expect  = require('chai').expect;
var request = require('request');

var mocha = new Mocha({
  reporter: 'mochawesome'
});

describe('Status and User ID Checking', function() {
it('Status Checking', function(done) {
    request.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {
        expect(response.statusCode).to.equal(200);  
        done();
    });
});

it('User ID checking', function(done) {
    request.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {

        console.log(body);
const resBody=JSON.parse(body);

        expect(resBody.userId).to.equal(1);
        done();

        
    });
});
 });