
var user = parseInt(prompt("please enter number?"));


for(i = 1;i <= user; i++){
	if (i % 3 ===0 && i ===5) {
		alert('fizzbuzz');
	} 
	else if(i % 3 === 0){
		alert('fizz');
	}
	else if(i % 5 === 0){
		alert('buzz');
	}

	else{
		alert(i);
	}
}