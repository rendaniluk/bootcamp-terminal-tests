module.exports = function(days) {
  var weekdays = !days.startsWith('S');
  return weekdays;
};
