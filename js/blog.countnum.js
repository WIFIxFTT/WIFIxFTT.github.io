var Games = function(){
	var answer = prompt("Put in your answers.");
            while(true){
              var guess = prompt("Let's guess!")
              var number = 0;
              var A = 0;
              var B = 0;

              number++;
              for (var i = 0; i < answer.length; i++) {
                for (var j = 0; j < guess.length; j++){
                  if (answer[i] === guess[j] && i === j)
                    A++;
                  if(answer[i] === guess[j] && i !== j)
                    B++;
                }
              }
              document.write(A+"A"+B+"B<br>");
              if(A === 4){
                document.write("congratulations!<br> You guess "+ number +" times.");
                break;
              }
            }
    }
