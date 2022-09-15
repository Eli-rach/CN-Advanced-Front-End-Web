function quiz(){
    alert("Ready for a quiz?");
	let score = 0;
	let num= 0;
	let question;
    let answer;
	let quiz_questions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?']
	;
	let quiz_answers = [1, 82, 0];
	
	//get total number of questions
	let totalQuestion = quiz_questions.length;
	
    console.log(quiz_questions.length)
	//generate random number for question
	let rand = Math.floor(Math.random() * 3);
	// console.log(rand);
    // console.log(quiz_questions[rand]);

    console.log(totalQuestion);
	for(let count = 0; count < totalQuestion; count++){
        console.log("in loop")
		question = quiz_questions[num];
        console.log(question)
        console.log(quiz_answers[num]);
		answer = prompt(question);
        // console.log(answer)
		if (answer == quiz_answers[num]) {
			score++;
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num === totalQuestion) {
			num = 0;
        }
    }

    document.getElementById("correctArea").innerHTML = `<p>You got ${score} out of ${totalQuestion} questions correct.</p>`

}



document.getElementById('questionArea').addEventListener('click', quiz)