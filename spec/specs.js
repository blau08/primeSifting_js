describe("prime_sifter", function() {
  it("will return array of prime numbers from inputted number", function() {
    expect(prime_sifter(10)).to.eql([2, 3, 5, 7]);
  });
});
