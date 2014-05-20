/**
 * 
 */
function LogIn(){
	
}

function Percent(){
	var correct=Number(document.getElementById('correct').innerHTML)
	var total=Number(document.getElementById('total').innerHTML)
	var percent=(correct*100/total).toFixed(1)
	document.getElementById('percent').innerHTML=percent+'%'
}

function Submit(){
	var correct=Number(document.getElementById('correct').innerHTML)
	var total=Number(document.getElementById('total').innerHTML)
	var type=document.getElementById('type').innerHTML
	var type2=document.getElementById('type2').innerHTML
	if (type===type2){
		document.getElementById('correct').innerHTML=Number(correct+1)
		document.getElementById('total').innerHTML=Number(total+1)
		Percent()
		alert('Correct!')
		Repr()
		Clear()
	}
	else{
		document.getElementById('total').innerHTML=Number(total+1)
		Percent()
		alert("That's not it... try again!")
		Clear()
	}
}

function Clear(){
	document.getElementById('pONE').innerHTML='___'
	document.getElementById('pTWO').innerHTML='___'
}

function Parent(gen){
	var pONE=document.getElementById('pONE').innerHTML
	var pTWO=document.getElementById('pTWO').innerHTML
	var both=0
	if (pONE==='___'){
		document.getElementById('pONE').innerHTML=gen
	}
	else if (pTWO==='___'){
		document.getElementById('pTWO').innerHTML=gen
		both=1
	}
	if (gen==='RR'){
		document.getElementById('type2').innerHTML='allG'
	}
	if (both===1){
		pONE=document.getElementById('pONE').innerHTML
		pTWO=document.getElementById('pTWO').innerHTML
		if (pONE==='Rr'&&pTWO==='Rr'){
			document.getElementById('type2').innerHTML='hybs'
		}
		else if ((pONE==='Rr'&&pTWO==='rr')||(pONE==='rr'&&pTWO==='Rr')){
			document.getElementById('type2').innerHTML='half'
		}
		else if (pONE==='rr'&&pTWO==='rr'){
			document.getElementById('type2').innerHTML='allY'
		}
	}
}

function Repr(){
	document.getElementById('init1').innerHTML="<h3 align=center>Two possible parent genotypes are:</h3><table align='center'><tr><td style='font-size:50px' id=pONE>___</td><td style='font-size:25px'>and</td><td style='font-size:50px' id=pTWO>___</td></tr><tr><td align=center><button onclick=Parent('RR')>RR</button></td><td align=center><button onclick=Parent('Rr')>Rr</button></td><td align=center><button onclick=Parent('rr')>rr</button></td></tr></table><p class='hide'>...</p><div align='center'><button onclick='Clear()'>CLEAR</button></div><div align='center'><button onclick=Submit()>SUBMIT</button></div>"
	document.getElementById('init').innerHTML=''
	var gen1=Math.random()
	var gen2=Math.random()
	if (gen1>=0 && gen1<(1/3))
		document.getElementById("gen1").innerHTML='RR'
	else if (gen1>=(1/3) && gen1<(2/3))
		document.getElementById("gen1").innerHTML='Rr'
	else if (gen1>=(2/3) && gen1<1)
		document.getElementById("gen1").innerHTML='rr'
	
	if (gen2>=0 && gen2 <(1/3))
		document.getElementById("gen2").innerHTML='RR'
	else if (gen2>=(1/3) && gen2<(2/3))
		document.getElementById("gen2").innerHTML='Rr'
	else if (gen2>=(2/3) && gen2<1)
		document.getElementById("gen2").innerHTML='rr'

	for (var i=1; i<21; i++){
		var rand=Math.random()
		var genONE=document.getElementById("gen1").innerHTML
		var genTWO=document.getElementById("gen2").innerHTML
		if (genONE==='RR'||genTWO==='RR'){
			document.getElementById(i).innerHTML="<img height='10%' width='10%' src='file:///C:/Users/Leia/Downloads/GreenPod.jpg'/>"
			document.getElementById('type').innerHTML='allG'
			var type=document.getElementById('type').innerHTML
		}
		else if(genONE==='Rr'&& genTWO==='Rr'){
			if (rand>=0 && rand<.75){
				document.getElementById(i).innerHTML="<img height='10%' width='10%' src='file:///C:/Users/Leia/Downloads/GreenPod.jpg'/>"
			}
			else{
				document.getElementById(i).innerHTML="<img height='10%' width='10%' src='file:///C:/Users/Leia/Downloads/YellowPod.jpg'/>"
			}
			document.getElementById('type').innerHTML='hybs'
			var type=document.getElementById('type').innerHTML
		}
		else if((genONE==='Rr' && genTWO==='rr')||(genONE==='rr' && genTWO==='Rr')){
			if(rand>=0 && rand<.5){
				document.getElementById(i).innerHTML="<img height='10%' width='10%' src='file:///C:/Users/Leia/Downloads/GreenPod.jpg'/>"
			}
			else{
				document.getElementById(i).innerHTML="<img height='10%' width='10%' src='file:///C:/Users/Leia/Downloads/YellowPod.jpg'/>"
			}
			document.getElementById('type').innerHTML='half'
			var type=document.getElementById('type').innerHTML
		}
		else{
			document.getElementById(i).innerHTML="<img height='10%' width='10%' src='file:///C:/Users/Leia/Downloads/YellowPod.jpg'/>"
			document.getElementById('type').innerHTML='allY'
			var type=document.getElementById('type').innerHTML
		}
	}
	var type2=document.getElementById('type2').innerHTML
	if (type===type2){
		Repr()
	}
}

function Check(){
	var correct=Number(document.getElementById('correct').innerHTML)
	var total=Number(document.getElementById('total').innerHTML)
	var genONE=document.getElementById('genONE').innerHTML
	var genTWO=document.getElementById('genTWO').innerHTML
	var q1=document.getElementById('q1').innerHTML
	var q2=document.getElementById('q2').innerHTML
	var q3=document.getElementById('q3').innerHTML
	var q4=document.getElementById('q4').innerHTML
	
	if (genONE==='RR'){
		if (genTWO==='RR'){
			if (q1==='RR' && q2==='RR' && q3==='RR' && q4==='RR'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		}
		else if (genTWO==='Rr'){
			if (q1==='RR' && q2==='RR' && q3==='Rr' && q4==='Rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		}
		else if (genTWO==='rr'){
			if (q1==='Rr' && q2==='Rr' && q3==='Rr' && q4==='Rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		}
	}
	else if (genONE==='Rr'){
		if (genTWO==='RR'){
			if (q1==='Rr' && q2==='RR' && q3==='RR' && q4==='Rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		}
		else if (genTWO==='Rr'){
			if (q1==='Rr' && q2==='RR' && q3==='Rr' && q4==='rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		}
		else if (genTWO==='rr'){
			if (q1==='rr' && q2==='Rr' && q3==='Rr' && q4==='rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		} 
	}
	else if (genONE==='rr'){
		if (genTWO==='RR'){
			if (q1==='Rr' && q2==='Rr' && q3==='Rr' && q4==='Rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		}
		else if (genTWO==='Rr'){
			if (q1==='Rr' && q2==='Rr' && q3==='rr' && q4==='rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		}
		else if (genTWO==='rr'){
			if (q1==='rr' && q2==='rr' && q3==='rr' && q4==='rr'){
				document.getElementById('correct').innerHTML=Number(correct+1)
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert('Correct!')
				ResetDG()
				DPrand1()
				DPrand2()
			}
			else{
				document.getElementById('total').innerHTML=Number(total+1)
				Percent()
				alert("That's not it... Try again!")
			}
		} 
	}
}

function DPrand1(){
	document.getElementById('init').innerHTML=''
	var gen=Math.random()
	if (gen>=0 && gen <(1/3)){
		document.getElementById('genONE').innerHTML='RR'
		document.getElementById('1a').innerHTML='R'
		document.getElementById('1b').innerHTML='R'
	}
	else if (gen>=(1/3) && gen<(2/3)){
		document.getElementById('genONE').innerHTML='Rr'
		document.getElementById('1a').innerHTML='R'
		document.getElementById('1b').innerHTML='r'
	}
	else if (gen>=(2/3) && gen<1){
		document.getElementById('genONE').innerHTML='rr'
		document.getElementById('1a').innerHTML='r'
		document.getElementById('1b').innerHTML='r'
	}
}

function DPrand2(){
	var gen=Math.random()
	if (gen>=0 && gen <(1/3)){
		document.getElementById('genTWO').innerHTML='RR'
		document.getElementById('2a').innerHTML='R'
		document.getElementById('2b').innerHTML='R'
	}
	else if (gen>=(1/3) && gen<(2/3)){
		document.getElementById('genTWO').innerHTML='Rr'
		document.getElementById('2a').innerHTML='R'
		document.getElementById('2b').innerHTML='r'
	}
	else if (gen>=(2/3) && gen<1){
		document.getElementById('genTWO').innerHTML='rr'
		document.getElementById('2a').innerHTML='r'
		document.getElementById('2b').innerHTML='r'
	}
}

function Choose(quad,gen){
	document.getElementById(quad).innerHTML=gen
}

function ResetDG(){
	document.getElementById('q1').innerHTML='--'
	document.getElementById('q2').innerHTML='--'
	document.getElementById('q3').innerHTML='--'
	document.getElementById('q4').innerHTML='--'
}

function DPrand(){
	document.getElementById('instruc').innerHTML='What color should a plant with the above genotype be?'
	document.getElementById('init').innerHTML=''
	document.getElementById('greenbutton').innerHTML="<button onclick='Green()'><img width='50%' height='50%' src='file:///C:/Users/Leia/Downloads/GreenPod.jpg'/></button>"
	document.getElementById('yellowbutton').innerHTML="<button onclick='Yellow()'><img width='50%' height='50%' src='file:///C:/Users/Leia/Downloads/YellowPod.jpg'/></button>"
	var gen=Math.random();
	if (gen>=0 && gen <(1/3))
		document.getElementById("result").innerHTML='RR'
	else if (gen>=(1/3) && gen<(2/3))
		document.getElementById("result").innerHTML='Rr'
	else if (gen>=(2/3) && gen<1)
		document.getElementById("result").innerHTML='rr'
}

function Start(){
	document.getElementById('score').innerHTML="<p align=center>Score:</p><table align=center><tr><td id=correct align=right>0</td><td align=center>/</td><td align=left id=total>0</td></tr><tr><td></td><td id='percent'>%</td><td></td></table><div align=center><button onclick=ReSco()>RESET SCORE</button></div>"
}

function Green(){
	var geno=document.getElementById('result').innerHTML
	var correct=Number(document.getElementById('correct').innerHTML)
	var total=Number(document.getElementById('total').innerHTML)
	if (geno==='RR'||geno==='Rr'){
		document.getElementById('check').innerHTML='Correct!'
		document.getElementById('correct').innerHTML=Number(correct+1)
		document.getElementById('total').innerHTML=Number(total+1)
		Percent()
		DPrand()
	}
	else {
		document.getElementById('check').innerHTML="That's not it... Try again!"
		document.getElementById('total').innerHTML=Number(total+1)
		Percent()
	}
}

function Yellow(){
	var geno=document.getElementById('result').innerHTML
	var correct=Number(document.getElementById('correct').innerHTML)
	var total=Number(document.getElementById('total').innerHTML)
	if (geno==='rr'){
		document.getElementById('check').innerHTML='Correct!'
		document.getElementById('correct').innerHTML=Number(correct+1)
		document.getElementById('total').innerHTML=Number(total+1)
		Percent()
		DPrand()
	}
	else {
		document.getElementById('check').innerHTML="That's not it... Try again!"
		document.getElementById('total').innerHTML=Number(total+1)
		Percent()
	}
}

function ReSco(){
	document.getElementById('correct').innerHTML=Number(0)
	document.getElementById('total').innerHTML=Number(0)
	document.getElementById('percent').innerHTML='%'
}