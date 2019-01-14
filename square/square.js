console.log("ACCESS: ALLOWED");
function nthroot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);

    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r;
   }
var square = function(div_id){
  console.log("START");
  var element = document.getElementById(div_id);
  var height = element.style.height.split('p')[0];
  var width = element.style.width.split('p')[0];
  var sqrt = nthroot(width * height, 2);
  var squares = {
    'width': width / sqrt,
    'height': height / sqrt
  };
  for(var i = 0; i < sqrt;i++){
    for(var j = 0; j <sqrt;j++){
      var hex = '#'+Math.floor(Math.random()*16777215).toString(16);
      var el = element.appendChild(document.createElement("span"));
      el.setAttribute('style','width: '+squares['width']+'px;height: '+squares['height']+'px;background-color: '+hex+';float: left');
    }
  }
  console.log("FINISHED");
}
