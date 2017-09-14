import {Component} from '@angular/core';

@Component({
	selector:'error',
	templateUrl:'../views/error.html'
})

export class ErrorComponent {
	
	public titulo: string;

	constructor(){
		this.titulo="Catalogo de servicios";
	}

	ngOnInit(){
		console.log("cargado el inicio");
	}
}