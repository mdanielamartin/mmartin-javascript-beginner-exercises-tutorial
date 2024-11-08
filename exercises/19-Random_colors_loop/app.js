function getColor(colorNumber) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors(students) {

	//your loop here

	for(let i=0;i<students;i++){
		let random = Math.floor(Math.random()*3+1);
		let exampleColor = getColor(random);
		console.log(exampleColor)
	}
	
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

