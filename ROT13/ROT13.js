var vm = new Vue({
  el: "#editor",
  data: {
    message: '',
    encode: ''
  },
  methods: {
    // Create ROT 13 for encoding user inputs
    _ROT13: function() {
                if (this.message != ''){
                  var messArr = this.message.toUpperCase().split('');
                  // alph_1[0] => alph_2[0] It means => A => N
                  var alph_1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M"],
                      alph_2 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
                      encode_n = '';
                  // Encode Every letter of user inputs
                  for (var i = 0; i < messArr.length ; i++){
                    /**
                    Ex:
                      if ('A' is in ['A',...]){
                        find A index in related alph and use it for other alph key!
                      }
                    Output:
                      A => N
                    **/
                    if (alph_1.includes(messArr[i]) == true){
                      encode_n += alph_2[alph_1.indexOf(messArr[i])];
                    }else if (alph_2.includes(messArr[i]) == true){
                      encode_n += alph_1[alph_2.indexOf(messArr[i])];
                    }else{
                      // for undefined letters such as dots and commas
                      encode_n += messArr[i];
                    }
                    this.encode = encode_n;
                  }
                }
              }
            }
          })
