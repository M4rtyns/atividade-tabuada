const cl = console.log
// --------------------------------------------------------------------------

const numero = document.querySelector('#n1')
const botao = document.querySelector('#b1')
const mostra = document.querySelector('#ta')
const lista = []
cl(lista.split)

function enviar (){
	for (i=1;i<=10;i++){
		ta.innerHTML = ta.innerHTML + numero.value + ' x ' + i + ' = ' + numero.value*i + "<br>"}
		
}

botao.addEventListener('click', enviar) 
