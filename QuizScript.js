// JavaScript source code
function check(){
	var correct=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var result=document.getElementById('result');
	if(q1=="b"){
			correct=correct+1;
			//	document.write(correct);
	}
	if(q2=="d"){
			correct=correct+1;
	}
	if(q3=="a"){
			correct=correct+1;
	}
	if(q4=="c"){
			correct=correct+1;
	}
	result.textContent=correct+ " out of 4 are correct!";
}