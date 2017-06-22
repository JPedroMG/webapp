import { Component } from '@angular/core';
import { RopaService} from '../Services/ropa.service';

@Component({
	selector: 'home',
	templateUrl : './home.component.html',
	providers:[RopaService]
})

export class HomeComponent {
	public titulo= "Pagina Principal";
	public listado_ropa:Array<string>;
	public prenda_a_guardar:string;

	public fecha;
	public nombre = "JUAN lopez";

	constructor(
		private _ropaService: RopaService
	){
		this.fecha = new Date(2017,5,13); // los meses van de 0 a 11
	}

	ngOnInit(){
		this.listado_ropa = this._ropaService.getRopa();
		console.log(this.listado_ropa);
	}

	guardarPrenda(){
		this._ropaService.agregarRopa(this.prenda_a_guardar)
		this.prenda_a_guardar=null;
	}
    

	eliminarPrenda(index:number){
		this._ropaService.deleteRopa(index);
	}
}