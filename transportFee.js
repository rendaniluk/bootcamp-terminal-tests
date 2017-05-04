module.exports = function(workSchedule) {
  //instead of if statements we use if switch
  switch (workSchedule) {
    case 'morning':
      return 'Transport Fee is R20';
    case 'afternoon':
      return 'Transport Fee is R10';
    case 'nightshift':
      return 'Transport is free';
      //for other route not listed above it return default
    default:
      return 'your not working ' + workSchedule;
  }
};
