let expect = chai.expect;

describe("productOfLargestTwo", function () {
  it("should return the number 966 when given [4, 8, 15, 16, 23, 42]", function () {
    let arr = [4, 8, 15, 16, 23, 42];

    let result = productOfLargestTwo(arr);

    expect(result).to.eql(966);
  });

  it("should return the number 2 when given [-10, -5, -2, -15, -1, -33, -88, -100]", function () {
    let arr = [-10, -5, -2, -15, -1, -33, -88, -100];

    let result = productOfLargestTwo(arr);

    expect(result).to.eql(2);
  });
});
