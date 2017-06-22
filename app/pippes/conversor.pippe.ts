import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'conversor'})

export class ConversorPippe implements PipeTransform{
	transform(value, por){ // en las pippes los parametros siempre llegan como string
		let value_one = parseInt(value);
		let value_two = parseInt(por);

		let result ="La multiplicacion: "+value_one+" x "+value_two +" = "+(value_one*value_two);

		return result;
	}	
}
