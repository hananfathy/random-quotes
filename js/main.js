
 function randomText(){


    var quotes = [" 'Be yourself; everyone else is already taken.' " , " 'So many books, so little time.' " , " 'A room without books is like a body without a soul.' " , " 'You only live once, but if you do it right, once is enough.' "];
    var person = ["-- Oscar Wilde" , "--Frank Zappa" , "--Marcus Tullius Cicero" ,"--Mae West" ];
    
    var num = Math.floor(Math.random() * person.length); 
    document.getElementById("quotes").innerHTML = quotes[num];
    document.getElementById("person").innerHTML =person[num];
   //  alert(userName[num] + "     " + text[num]);
 }




