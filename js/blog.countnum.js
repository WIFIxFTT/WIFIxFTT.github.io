var answer = "1234";
var guess = "2335";
var A = 0;
var B = 0;

for (var i = 0; i < answer.length; i++) {
	for (var j = 0; j < guess.length; j++){
		if (answer[i] == guess[j] && i == j )
			A++;
		if(answer[i] == guess[j])
			B++;
	};
};

console.log(A + B);
	