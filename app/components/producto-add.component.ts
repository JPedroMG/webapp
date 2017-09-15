import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';
import {GLOBAL} from '../Services/global';


@Component({
	selector:'producto-add',
	templateUrl:'../views/producto-add.html',
	providers:[ProductoService]
})

export class ProductoAddComponent{
	public titulo:string;
	public producto:Producto;
	public filesToUpload;
	public resultUpload;

	constructor(
		private _productoService:ProductoService,
		private _route:ActivatedRoute,
		private _router:Router
	){
		this.titulo='Crear un nuevo producto';
		this.producto=new Producto(0,'','',0,'');
	}

	ngOnInit(){
		console.log('prpducto-add');
	}

	onSubmit(){
		console.log(this.producto);

		this._productoService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then(
		(result)=>{
			console.log("exito");
			console.log(result);
			this.producto.imagen="ruta";
		},
		(error)=>{
			///console.log(<any>error);
			console.log("error");
		}
		);

		this._productoService.addProducto(this.producto).subscribe(
			result=>{
				if(result.codigo==200){
					this._router.navigate(['/productos']);
				}else{
					console.log(result)
				}
			},
			error=>{
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput:any){
		this.filesToUpload=<Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}
}