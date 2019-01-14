$(document).ready(function(){

  $("#submit").click(() => {

    let weight = Number($("#weight-input").val());
    let height = Number($("#height-input").val());

    if (weight < 1 || height < 0) {
      alert("Check your inputs");
    }
    else {
      let bmi = String(weight / (height * height)).split('.')[0];

      if (bmi < 18){
        var status = 'underweight';
        document.getElementById("bmi-translation").style.color = red;

      } else if (bmi < 26) {
        var status = 'normal';

      } else {
        var status = 'overweight';
        document.getElementById("bmi-translation").style.color = red;
      }

      document.getElementById("bmi-result").innerHTML = bmi;
      document.getElementById("bmi-translation").innerHTML = status;
      document.getElementById("notification").style.visibility = 'visible';
    }

  });

  $("#back-notification").click(() => {
    document.getElementById("notification").style.visibility = 'hidden';
  });
});
