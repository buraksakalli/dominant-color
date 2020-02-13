const expect = require('chai').expect;
const request = require('request');

const url = {
  main: 'https://dominantcolor.herokuapp.com/'
}

describe("Main API", () => {
  it("returns status 200", (done) => {
    request(url.main, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
