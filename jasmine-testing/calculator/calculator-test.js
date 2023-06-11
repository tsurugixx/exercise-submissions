
it('should calculate the monthly rate correctly', function () {
  values = {
    amount: 12000, years: 5, rate: 13.9
  }
  
  expect(calculateMonthlyPayment(values)).toEqual('278.60');
});


it("should return a result with 2 decimal places", function() {
  values = {
    amount: 100, years: 5, rate: 7.4
  }
  expect(calculateMonthlyPayment(values)).toEqual('2.00');
});

/// etc
