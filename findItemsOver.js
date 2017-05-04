module.exports = function(itemPrice, threshold) {
  //declaring an empty list
  var newList = [];

  for (var i in itemPrice) {
    var listItem = itemPrice[i];
    //conditional to check if price is over threshold
    if (listItem.price > threshold) {
      newList.push(listItem)
    }
  }
  return newList;
}
