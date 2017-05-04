//Declaring function allFromTown
module.exports = function(RegNum, town) {
  //Declaring an empty array
  var WhichTown = RegNum.split(',');
  var HowMany = [];
  //split string using .split
  //using for loop to loop from 0 to WhichTown length
  for (var i = 0; i < WhichTown.length; i++) {
    //using conditional statement to print WhichTown registration
    if (WhichTown[i].startsWith(town)) {
      HowMany.push(WhichTown[i]);
      
    }
  }
return HowMany.length;
};
