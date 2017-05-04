module.exports = function(profitDep) {
  var higherSD = 0;
  var hSaleD = [];
  //for loop to loop through the object data
  for (var i in profitDep) {
    //conditional to decide which department works hard
    if (profitDep[i].sales > higherSD) {
      higherSD = profitDep[i].sales;
      hSaleD = profitDep[i];
    }
  }
  return hSaleD.department;
};
