
module.exports = function (number){
  var frompl = [];
      //using split to separate string by comma
        var allpaarl = number.split(',');
        //for loop to run from 0 to the length of allpaarl
        for (var i = 0;i < allpaarl.length;i++){
          //conditional statement to decide the value to start string
          if(allpaarl[i].startsWith('CJ')){
            frompl.push(allpaarl[i]);
          }
        }
  return frompl.length;
};

