let chai = require("chai");
let chaiHttp = require("chai-http");
let assert = require("assert");

chai.use(chaiHttp);

const serverUrl = "http://localhost:5000";

describe("/products", () => {
  it("it should GET all the products", done => {
    chai
      .request(serverUrl)
      .get("/products")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("upvote testing", () => {
  it("it increse total votes according", done => {
    chai
      .request(serverUrl)
      .get("/getProduct")
      .query({
        _id: 1
      })
      .end((err, res) => {
        let { data: { votes: prevVotes } = {} } = res.body;
        chai
          .request(serverUrl)
          .post("/upvote")
          .send({
            _id: 1
          })
          .end((err, res) => {
            let { data: { votes: newVotes } = {} } = res.body;
            res.body.should.be.a("object");
            if (prevVotes) {
              assert.equal(newVotes, 0);
            } else {
              assert.equal(newVotes, 1);
            }
            done();
          });
      });
  });
});
