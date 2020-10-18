

var module = function () {
  var obj = {};
  var maloprodajniLimit = 100;
  var veleprodajniLimit = 80;

  obj.proveraMaloprodaja = broj => {
    if (maloprodajniLimit > broj) {
      return true;
    } else {
      return false;
    }
  }

  obj.proveraVeleprodaja = broj => {
 if (veleprodajniLimit > broj) {
   return true;
 } else {
   return false;
 }
  }

  return obj;
}();
