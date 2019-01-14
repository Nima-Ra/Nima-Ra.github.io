var vm = new Vue({
  el: "#editor",
  data: {
    message: '',
    encode: ''
  },
  methods: {


    _AffineCipher: function() {
      let result = '';
      function count(string,char) {
        var re = new RegExp(char,"gi");
        return string.match(re).length;
      }

      if (this.message != ''){
        for (var j = 0; j < this.message.split(' ').length; j++){
          var word = this.message.split(' ')[j];
          result += j != 0 ? ' ' : '';

          word = word.toUpperCase();
          var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
          for (var i = 0; i < word.length; i++){
            let letter = word[i];
            if (alphabet.indexOf(letter) != -1){
              let y,x,a;
              x = count(word, letter);
              a = alphabet.indexOf(letter);
              y = alphabet[((x * a) + 1) % 26];
              result += y;
            }else{
              y = letter;
              result += y;
            }
          }
          this.encode = result;
        }
      }
    }


  }
});
