//calculator
module.exports = function(initialDepositValue, annualInterestValue,
  numberOfyearsValue, interestTimesValue, monthlyContributionValue) {
  A = initialDepositValue * Math.pow(1 + (annualInterestValue /
    interestTimesValue), (numberOfyearsValue * interestTimesValue));
  return A.toFixed(2);
};
