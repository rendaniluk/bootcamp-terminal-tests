module.exports = function(itemPrice) {
  var newList = [];

  for (var i in itemPrice) {
    var listItem = itemPrice[i];
    //conditional to check if price is over 20
    if (listItem.price > 20) {
      newList.push(listItem)
    }
  }
  return newList;
};
