// alert("welcome");

// var n = Math.random();
// n = Math.floor(n * 6);
// n = n + 1



//  var n = Math.floor( (Math.random() * 6) + 1 );
// console.log(n);


var yourname = prompt("whats your middle(english) name?",);

var hishername = prompt("input his/her middle(english) name:")
var lovescore = Math.floor(Math.random() * 100 + 1 );
var cyn = "cynthia";
var wil = "wilson"

  if (yourname == cyn && hishername == wil){document.querySelector("h2").innerHTML = "YOUR LOVE SCORE IS 100% <em>Click here</em> ";
document.querySelector("h2").addEventListener("click", function() {location.href ="cynthia.html";
})
}

  
    
 if(yourname !== cyn && hishername !== wil && lovescore > 70) 
 {document.querySelector("h2").innerHTML = "YOUR LOVE SCORE IS " + lovescore + "% YOU'RE INLOVE!";}

if(yourname !==cyn && hishername !== wil && lovescore < 70)
{document.querySelector("h2").innerHTML = "YOUR LOVE SCORE IS " + lovescore + "% YOU'RE NOT INLOVE!";
 }
