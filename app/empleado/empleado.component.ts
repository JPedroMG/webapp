import{Component} from '@angular/core';
import{Empleado} from './empleado';

@Component({
	selector:'empleado',
	templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
	public nombre_empleado = 'Componente Empleados:'; 
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajadorExterno:boolean;
	public color:string;
	public alineacion:string;
	public colorSeleccionado:string;
	
	constructor(){
		this.empleado = new Empleado('Pedro M',32,'Programador',true);
		this.trabajadores = [
			new Empleado('Alberto',25,'Amin',true),
			new Empleado('Ana Martinez',35,'Chef',true),
			new Empleado('Vircto',32,'Pinche',false)
		];
		this.trabajadorExterno=false;
		this.color='red';
		this.alineacion='right';
		this.colorSeleccionado='#CCC';
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajadorExterno=valor
	}

	cambiarColor(valor){
		this.color=valor;
		this.colorSeleccionado=valor;
	}

	cambiarAlineacion(valor){
		this.alineacion=valor;
	}
}