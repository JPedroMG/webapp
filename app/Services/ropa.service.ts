import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
	public nombrePrenda='Pantalones vaqueros';
	public coleccion_ropa=['pantalones','playera'];

	prueba(nombreprenda){
		return nombreprenda;
	}

	agregarRopa(NombrePrenda:string):Array<string>{
		this.coleccion_ropa.push(NombrePrenda);
		return this.getRopa();
	}

	getRopa():Array<string>{
		return this.coleccion_ropa;
	}

	 deleteRopa(index:number){
    	this.coleccion_ropa.splice(index,1);
    	return this.getRopa();
    }
}