import{ Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl:'./fruta.component.html'
})

export class FrutaComponent{
	public nombre_component='Componente de fruta';
	public listado_frutas='Naranja, manzana, pera y sandia';

	public hola:string;
	public nombre:string;
	public edad:number;
	public mayorEdad:boolean;
	public trabajos:Array<string>=['carpintero','albañíl','fontanero'];
	comodin:any;

	constructor(){
		this.hola='u cant c me';
		this.nombre=' Pedro Montero';
		this.edad=32;
		this.mayorEdad=true;
		this.comodin='SI';
		console.log(this.comodin);
		console.log(this.trabajos);
	}

	ngOnInit(){
		this.cambiarNombre();
		this.cambiarErdad(22);
		//alert(this.nombre);

		//variables y alcance 
		var uno=8
		var dos=15
		console.log("afuera del if"+uno)

		if(uno===8){
			let uno=3;
			var dos=88;
			console.log("dentro del if"+uno)
		}

		console.log("afuera del if"+uno)
	}

	cambiarNombre(){
		this.nombre='juan lopez';
		
	}

	cambiarErdad(edad){
		this.edad=edad
	}
}