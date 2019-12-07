$(function () {
	var questions = getAllQuestions();
	var container = $("#questionContainer");
	console.log("Inside jQuery document.ready(). Total Questions: " + questions.length);

	$("#quizBuilder").click(function () {
		console.log("Inside #quizBuilder.click ...");
		//	window.alert("Implement #quizBuilder.click to Generate and Print Quiz Questions. See source file for further details.");
		var js_questions = [];
		var chosen = [];
		// TODO: Get a random number of JavaScript Questions
		var js_number = Math.floor(Math.random() * 70*20/100); 
		// TODO: Get a random number of jQuery Questions
		var jquery_number = Math.floor(Math.random() *13*70/100); 
		// TODO: Create question elements (DIV) for each JavaScript question and push that into an array, shuffling (randomizing) answer order
		for (k = 0; k < js_number; k++)
		{
			var n = Math.floor(Math.random() * 20);
			while (chosen.includes(n)) {
				n = Math.floor(Math.random() * 20);
			}
			var ques = $("<div class = 'quest'> </div>");	
			var ques_no = "Q. " + questions[n].question;
			var q = $('<h4>' + ques_no + '</h3>');
			q.appendTo(ques);
			var ulist = $('<ul class="list-unstyled">');
			var x = shuffle(questions[n].options);
			for (j = 0; j < x.length; j++)
			{
				var item = $('<li>' + x[j].option + '</li>');
				item.appendTo(ulist);
			}
			ulist.appendTo(ques);
			js_questions.push(ques);
			chosen.push(n);
		}
			// TODO: Create question elements (DIV) for each jQuery question and push that into the same array, shuffling (randomizing) answer order
		for (k = 0; k < jquery_number; k++) {
			var n = Math.floor(Math.random() * 13) + 20;
			while (chosen.includes(n)) {
				n = Math.floor(Math.random() * 13);
			}
			var ques = $("<div class = 'quest'> </div>");
			var ques_no = "Q. " + questions[n].question;
			var q = $('<h4>' + ques_no + '</h3>');
			q.appendTo(ques);
			var ulist = $('<ul class="list-unstyled">');
			var x = shuffle(questions[n].options);
			for (j = 0; j < x.length; j++) {
				var item = $('<li>' + x[j].option + '</li>');
				item.appendTo(ulist);
			}
			ulist.appendTo(ques);
			js_questions.push(ques);
			chosen.push(n);
		}
		// TODO: Shuffle the array so that the order of questions is randomized
		js_questions = shuffle(js_questions);
			// Empty container element so that previous questions are cleared
		container.empty();
		// TODO: Add questions from question elements array created above to container so that questions with answer options are displayed
		for (i = 0; i < js_questions.length; i++) {
			js_questions[i].appendTo(container);
			container.append(js_questions[i].innerHTML);
		}
			// Call print() method, to print the page
		window.print();
	});
	
	$("#answerBuilder").click(function() {
		console.log("Inside #answerBuilder.click ...")
//		window.alert("Implement #quizBuilder.click to Generate and Print Quiz Questions. See source file for further details.");
		ques_elements = [];
		// TODO: Create question elements (DIV) for each question in questions array, include just the answer option (first one)
		for (k = 0; k < questions.length; k++) {
			var ques = $("<div class= quest> </div>");
			var ques_no = "Q. " + questions[k].question;
			var q = $('<h4>' + ques_no + '</h3>');
			q.appendTo(ques);
			var ulist = $('<ul class="list-unstyled">');
			var item = $('<li>' +  questions[k].options[0].option + '</li>');
			item.appendTo(ulist);
			ulist.appendTo(ques);
			ques_elements.push(ques);
		}
		// Empty container element so that previous questions are cleared
		container.empty();
		// TODO: Add questions from question elements array created above to container so that questions with answers are displayed
		for (i = 0; i < ques_elements.length; i++) {
			ques_elements[i].appendTo(container);
			container.append(ques_elements[i].innerHTML);
		}
		// Call print() method, to print the page
		window.print();
	});
});

function shuffle(array) {
	for (i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}