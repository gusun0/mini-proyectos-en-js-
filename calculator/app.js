var inputLabel = document.getElementById('inputLabel');


function pushBtn(obj){
	var pushed = obj.innerHTML;
	console.log(pushed);

	if(pushed == '='){
		// Calculate
		inputLabel.innerText = eval(inputLabel.innerHTML);
	}else if(pushed == 'AC'){
		// All Clear
 		inputLabel.innerHTML = '0';	
	}else{
		if(inputLabel.innerHTML == '0'){
			inputLabel.innerHTML = pushed;
		}else{
			inputLabel.innerHTML += pushed;
		}
	
	}

}


