var counter = 0;

function OnClickBtn(count) {
	counter++;
	console.log(counter);
	count.innerHTML = "Ты нажал уже " + counter + " раз!";

	if(counter >=10){
		alert('Может ты прекратишь блять?');
	}
}
