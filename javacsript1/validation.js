function calculer() {
a=document.getElementById('a');
b=document.getElementById('b');
r=document.getElementById('r');

ops=document.getElementsByName('op');
var operation='';
var resultat=0;

for (var i = 0; i < ops.length; i++) {
	if(ops[i].checked){
operation=ops[i].value
	}
}

switch (operation) {
	case '+':

		resultat=parseFloat(a.value)+ parseFloat(b.value);
	
		break;
	case '-':
		resultat=a.value-b.value;
		break;
	case '/':
		resultat=a.value/b.value;
		break;
	case '*':
		resultat=a.value*b.value;
		break;

	default:
		
alert('opération non valide');
		}
r.style.display = 'block';

erreur=(isNaN(a.value) || isNaN(b.value) || isNaN(resultat)||a.value.trim()=="" ||b.value.trim()=="");

		
		if(erreur){
		r.innerHTML="<h2>ce n'est pas un nombre </h2>"
	r.style.backgroundColor = '#F00'
		}else {
	r.innerHTML="<h2>"+a.value+" "+operation+" "+b.value+ " = "+resultat+"</h2>"
r.style.backgroundColor = 'black' 

}
}


function chargement(){
	
}

function calculerCombo(){
a=document.getElementById('a');
b=document.getElementById('b');
r=document.getElementById('r');
operation=document.getElementById('operation');
indiceChoisit=operation.options.selectedIndex;
operationChoisit=operation.options[indiceChoisit].value;
alert(operationChoisit)

}







/*alert('vous avez choisi l\'opération : '+operation)
console.log('a est '+a.value+' b est '+b.value);*/
//alert('a est '+a.value+' b est '+b.value);

