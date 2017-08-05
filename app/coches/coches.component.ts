import {Component} from '@angular/core';
import {Coche} from './coche';
import {PeticionesService} from '../services/peticiones.services';

@Component({
	selector:'Coches',
	templateUrl:'./coches.component.html',
	providers:[PeticionesService]
})

export class CochesComponent {
	public coche:Coche;
	public coches:Array<Coche>;
	public articulos;

	constructor(
			private _peticionesService:PeticionesService
		) {
			this.coche = new Coche("","","");
			this.coches = [
				new Coche("Civic SI","210","Rojo"),
				new Coche("GSR 200","190","Tinto")
			];
	}

	ngOnInit(){
		this._peticionesService.getArticulos().subscribe(
			result=>{
				this.articulos=result;
				console.log(result);
				if(!this.articulos){
					console.log("Error en el servidor");
				}
			},
			error=>{
				var errorMensaje=<any>error;
				console.log(errorMensaje);
			}
		);
		///console.log(this._peticionesService.getPrueba());
	}

	onSubmit(){
		console.log(this.coche);
		this.coches.push(this.coche);
		this.coche = new Coche("","","");
	}

}