import {Component} from '@angular/core';
import {Coche} from './coche';

@Component({
	selector:'Coches',
	templateUrl:'./coches.component.html'
})

export class CochesComponent {
	public coche:Coche;
	public coches:Array<Coche>;
	constructor() {
		this.coche = new Coche("","","");
		this.coches = [
			new Coche("Civic SI","210","Rojo"),
			new Coche("GSR 200","190","Tinto")
		];
	}

	onSubmit(){
		console.log(this.coche);
		this.coches.push(this.coche);
		this.coche = new Coche("","","");
	}

}