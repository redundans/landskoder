document.addEventListener('DOMContentLoaded', function() {
	const letters = [
		"A", 
		"B", 
		"C", 
		"D", 
		"E", 
		"F", 
		"G", 
		"H", 
		"I", 
		"J", 
		"K", 
		"L", 
		"M", 
		"N", 
		"O", 
		"P", 
		"Q", 
		"R", 
		"S", 
		"T", 
		"U", 
		"V", 
		"W", 
		"X", 
		"Y", 
		"Z"
	];
	
	const words = {
		"sv" : [
			{
				letter: "A",
				word: "ADAM"
			},
			{
				letter: "B",
				word: "BERTIL"
			}
		]
	};
	
	const activeLetterElement = document.getElementById('letter');
	const inputElement = document.getElementById('input');
	const formElement = document.getElementById('form');
	
	let activeLetter = words.sv[Math.floor(Math.random()*words.sv.length)];
	
	formElement.onsubmit = function(event){
		event.preventDefault();
		if ( inputElement.value.toUpperCase() === activeLetter.word.toUpperCase() ) {
			alert("Rätt");
		} else {
			alert("Fel!");
		}
	};
	
	function updateScreen() {
		activeLetterElement.innerHTML = activeLetter.letter;
		inputElement.setAttribute("maxlength", activeLetter.word.length);
		inputElement.style.width = activeLetter.word.length+"em"
	}
})
