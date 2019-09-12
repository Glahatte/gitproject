function checkIt(){
  var Random= (Math.floor(Math.random()*5));
  var input = document.getElementById("input").value;
  if (Random==input) {alert ("THUDNER CROSS SPLIT ATTACK");}
  else if (Random!=input) {alert ("you fell for it fool");}

  }
