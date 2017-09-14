import 'rxjs/add/operator/map'; //recojes las petciones del servidor y poder mapearlos
import {Observable} from "rxjs";
import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';

@Component({
	selector:'productos',
	templateUrl:'../views/productos-list.html',
	providers:[ProductoService]
})

export class ProductosListComponent {
	public titulo:string;
	public productos: Producto[];
	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _productoService: ProductoService
	) {
		this.titulo="listado de Productos";
	}

	ngOnInit(){
		console.log("productos cargados");
		//alert(this._productoService.getProductos())
		this._productoService.getProductos().subscribe(
			result=>{
				if(result.codigo!=200){
					console.log(result)
				}else{
					this.productos=result.data;
				}
			},
			error=>{
				console.log(<any>error);
			}
		)
	}
}