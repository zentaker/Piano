const buttons = document.querySelectorAll('button');//para selecionar todos los botones a la vez 

buttons.forEach(  // el metodo .foreach() ejecuta la funcion indicada una vez por cada elemento del array
	button => button.addEventListener('click', reproducirSonido)//para cada boton vamos a ecuchar el cick que el usuario genera
); 
	


function reproducirSonido( event ) {  // declaracion de la funcion tiene que estar pasado como parametro en el event listener
	
	
	const button = event.target; //hay que aceder al atributo data de cada btn y guardarlo en una variable
	const note = button.dataset.note; // se capura la nota dentro de la variable note

	console.log(note); // de esta manera estamos reconociendo sobre que boton se ha echo click

	

	const audio = document.getElementById(`audio${note}`); //concatenar el audio con la nota, se le envia la nota do, re.. a la funcion get element by ide y ubique elementos con audioDO.. 
	audio.pause(); // es recibido el elemento audio y se le pasan para que se reproduzva 
	audio.currentTime = 0; // las dos lineas equivalen a un stop 
	audio.play(); // luego se vuelva a reproducir 

}; 


// detectar las pulsaciones de los botnes 
document.addEventListener('keypress', event => { //keydown detecta cuando una tecla es presionada
	const key = event.key; //guardar en una constante la pulsacion del evento 
	const button = document.querySelector(`button[data-key="${key}"]`); // se anexa la informacionmediante el datakey del archivo html
	if (button)
	button.click(); // triger nosotros ocacionamos que se produzca una accion 
	
});