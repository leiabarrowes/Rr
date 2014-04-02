/**
 * 
 */
function DPrand(){
	document.getElementById('instruc').innerHTML='What color should a plant with the above genotype be?'
	var gen=Math.random();
	if (gen>=0 && gen <(1/3))
		document.getElementById("result").innerHTML='RR'
	else if (gen>=(1/3) && gen<(2/3))
		document.getElementById("result").innerHTML='Rr'
	else if (gen>=(2/3) && gen<1)
		document.getElementById("result").innerHTML='rr'
}

function Green(){
	var geno=document.getElementById('result').innerHTML
	if (geno==='RR'||geno==='Rr'){
		document.getElementById('correct').innerHTML='Correct!'
		DPrand()
	}
	else {
		document.getElementById('correct').innerHTML="That's not it... Try again!"
	}
}

function Yellow(){
	var geno=document.getElementById('result').innerHTML
	if (geno==='rr'){
		document.getElementById('correct').innerHTML='Correct!'
		DPrand()
	}
	else {
		document.getElementById('correct').innerHTML="That's not it... Try again!"
	}
}