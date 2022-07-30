function cargarDatos(){
	
	var nombre = prompt("Ingrese el nombre del alumno: ", "");
	var apellido = prompt("Ingrese el apellido del alumno: ", "");
	var promedio = prompt("Ingrese la nota final del curso: ", "");
	var alumno1 = new NotaDelAlumno(nombre,apellido,promedio);
	alumno1.mostrarDatos();
}
function validar(){

}

function NotaDelAlumno (nombre,apellido,promedio) {

    this.nombreTitular = nombre;

	this.apellidosTitular = apellido;

	this.promedio = promedio;

	this.mostrarDatos = function () {
		var msg = 'Los datos del alumno son: ';

	    msg = msg + ' Nombre: ' + this.nombreTitular;

	    msg = msg + '; Apellido: ' + this.apellidosTitular + '; Promedio: ' + this.promedio;

	    alert(msg);

	};

}


