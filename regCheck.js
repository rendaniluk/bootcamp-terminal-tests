module.exports = function(regNum, loc) {
  var check_reg = regNum.endsWith(loc)
  return check_reg;
};
