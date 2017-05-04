module.exports = function(year) {
  var presentyear = 2017,
    yearback = year.getFullYear();
  return presentyear - yearback;
};
