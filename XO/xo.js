Array.prototype.count = function(obj){
  var count = this.length;
  if(typeof(obj) !== "undefined"){
    var array = this.slice(0), count = 0; // clone array and reset count
    for(i = 0; i < array.length; i++){
        if(array[i] == obj){
          count++;
        }
      }
    }
    return count;
  }
var finished = false;
var clicked = function (id) {
  if (finished == false){
    var element = document.getElementById(id);
    var system_clicks = 0;
    var img = document.createElement('img');
    element.appendChild(img).setAttribute('id','user_img'+id);
    var img = document.getElementById('user_img'+id);
    img.setAttribute('style','width: 133px;height: 133px');
    img.setAttribute('src','./x.png');
    var num = id.split('_')[1];
    if (num <= 3){
      var x = 0;
    }else if (num <= 6) {
      var x = 1;
    }else {
      var x = 2;
    }
    if (num == 2 || num == 5 || num == 8){
      var y = 1;
    }else if (num == 1 || num == 4 || num == 7) {
      var y = 2;
    }else{
      var y = 0;
    }
    if(lines[x][y] == 0){
      lines[x][y] = 'x';
      user_clicks++;
      if (who_wins('x') == true){
          alert('You Won')
          finished = true;
      }else {
        console.log(lines);
        system_clicked();
      }
    }else{
      alert('You cant choose a marked place!');
    }
  }else{
      alert('Game finished!');
    }
  }
var setO = function(num){
  var element = document.getElementById('_'+num);
  var img = document.createElement('img');
  element.appendChild(img).setAttribute('id','user_img'+num);
  var img = document.getElementById('user_img'+num);
  img.setAttribute('style','width: 133px;height: 133px');
  img.setAttribute('src','./o.png');
}
// find find_num
var find_num = function(i,j){
  if (i == 0){
    if (j == 0){
      return 3;
    }else if (j == 1) {
      return 2;
    }else if (j == 2) {
      return 1;
    }
  }else if (i == 1){
    if (j == 0){
      return 6;
    }else if (j == 1) {
      return 5;
    }else if (j == 2) {
      return 4;
    }
  }else if (i == 2){
    if (j == 0){
      return 9;
    }else if (j == 1) {
      return 8;
    }else if (j == 2) {
      return 7;
    }
  }
}
// check who wins?
var who_wins = function (i){
  if (lines[0][0] == i && lines[0][1] == i && lines[0][2] == i){
    return true;
  }else if (lines[1][0] == i && lines[1][1] == i && lines[1][2] == i) {
    return true;
  }else if (lines[2][0] == i && lines[2][1] == i && lines[2][2] == i) {
    return true;
  }else if (lines[0][0] == i && lines[1][0] == i && lines[2][0] == i) {
    return true;
  }else if (lines[0][1] == i && lines[1][1] == i && lines[2][1] == i) {
    return true;
  }else if (lines[0][2] == i && lines[1][2] == i && lines[2][2] == i) {
    return true;
  }else if (lines[0][0] == i && lines[1][1] == i && lines[2][2] == i) {
    return true;
  }else if (lines[0][2] == i && lines[1][1] == i && lines[2][0] == i) {
    return true;
  }else{
    return false;
  }
}
// system clicks after user click
var system_clicked = function (){
  var free = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];
  for (var i = 0; i <= 2; i++){
    for (var j = 0; j <= 2; j++){
      if (lines[i][j] == 0){
        free[i][j] = 1;
      }
    }
  }
  if (free[0].count(1) >= 1 || free[1].count(1) >= 1 || free[2].count(1) >= 1){
    if (finished == false){
      // Left coloumn
      if (lines[0][0] == 'x' && lines[1][0] == 'x' && lines[2][0] == 0){
        lines[2][0] = 'o';
        setO(9);
      }else if (lines[0][0] == 'x' && lines[2][0] == 'x' && lines[1][0] == 0) {
        lines[1][0] = 'o';
        setO(6);
      }else if (lines[2][0] == 'x' && lines[1][0] == 'x' && lines[0][0] == 0) {
        lines[0][0] = 'o'
        setO(3);
      }
      // middle coloumn
      else if (lines[0][1] == 'x' && lines[1][1] == 'x' && lines[2][1] == 0){
        lines[2][1] = 'o';
        setO(8);
      }else if (lines[0][1] == 'x' && lines[2][1] == 'x' && lines[1][1] == 0) {
        lines[1][1] = 'o';
        setO(5);
      }else if (lines[2][1] == 'x' && lines[1][1] == 'x' && lines[0][1] == 0) {
        lines[0][1] = 'o'
        setO(2);
      }
      // right coloumn
      else if (lines[0][2] == 'x' && lines[1][2] == 'x' && lines[2][2] == 0){
        lines[2][2] = 'o';
        setO(7);
      }else if (lines[0][2] == 'x' && lines[2][2] == 'x' && lines[1][2] == 0) {
        lines[1][2] = 'o';
        setO(4);
      }else if (lines[2][2] == 'x' && lines[1][2] == 'x' && lines[0][2] == 0) {
        lines[0][2] = 'o'
        setO(1);
      }
      // top row
      else if (lines[0][0] == 'x' && lines[0][1] == 'x' && lines[0][2] == 0){
        lines[0][2] = 'o';
        setO(1);
      }else if (lines[0][0] == 'x' && lines[0][2] == 'x' && lines[0][1] == 0) {
        lines[0][1] = 'o';
        setO(2);
      }else if (lines[0][1] == 'x' && lines[0][2] == 'x' && lines[0][0] == 0) {
        lines[0][0] = 'o'
        setO(3);
      }
      // middle row
      else if (lines[1][0] == 'x' && lines[1][1] == 'x' && lines[1][2] == 0){
        lines[1][2] = 'o';
        setO(4);
      }else if (lines[1][0] == 'x' && lines[1][2] == 'x' && lines[1][1] == 0) {
        lines[1][1] = 'o';
        setO(5);
      }else if (lines[1][1] == 'x' && lines[1][2] == 'x' && lines[1][0] == 0) {
        lines[1][0] = 'o'
        setO(6);
      }
      // bottom row
      else if (lines[2][0] == 'x' && lines[2][1] == 'x' && lines[2][2] == 0){
        lines[2][2] = 'o';
        setO(7);
      }else if (lines[2][0] == 'x' && lines[2][2] == 'x' && lines[2][1] == 0) {
        lines[2][1] = 'o';
        setO(8);
      }else if (lines[2][1] == 'x' && lines[2][2] == 'x' && lines[2][0] == 0) {
        lines[2][0] = 'o'
        setO(9);
      }
      // Zarbdari \
      else if (lines[0][0] == 'x' && lines[1][1] == 'x' && lines[2][2] == 0){
        lines[2][2] = 'o';
        setO(7);
      }else if (lines[0][0] == 'x' && lines[2][2] == 'x' && lines[1][1] == 0) {
        lines[1][1] = 'o';
        setO(5);
      }else if (lines[2][2] == 'x' && lines[1][1] == 'x' && lines[0][0] == 0) {
        lines[0][0] = 'o'
        setO(3);
      }
      // Zarbdari /
      else if (lines[0][2] == 'x' && lines[1][1] == 'x' && lines[2][0] == 0){
        lines[2][0] = 'o';
        setO(9);
      }else if (lines[0][2] == 'x' && lines[2][0] == 'x' && lines[1][1] == 0) {
        lines[1][1] = 'o';
        setO(5);
      }else if (lines[1][1] == 'x' && lines[2][0] == 'x' && lines[0][2] == 0) {
        lines[0][2] = 'o'
        setO(1);
      }
      // no one?
      else if (lines[1][1] == 0) {
        lines[1][1] = 'o';
        setO(5);
      }else{
        var check_o = function(free){
          if (free[0].count(1) >= 1 || free[1].count(1) >= 1 || free[2].count(1) >= 1){
            var nums = [0,1,2];
            var i = nums[Math.floor(Math.random() * nums.length)];
            var j = nums[Math.floor(Math.random() * nums.length)];
            if (free[i][j] == 1){
              lines[i][j] = 'o';
              setO(find_num(i,j));
            }else{
              check_o(free);
            }
          }
        }
        check_o(free);
      }
      if (who_wins('o') == true){
        alert("System won");
        finished = true;
      }
    }
  }else{
    alert('Draw!');
    finished = true;
  }
}
var user_clicks = 0;
var lines = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];
