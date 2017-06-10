import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//importar componentes a los que deseas acceder
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent} from './contacto/contacto.component';
import { HomeComponent} from './home/home.component';

const appRoutes:Routes = [
	{path: '', component:HomeComponent},
	{path: 'empleado', component:EmpleadoComponent},
	{path: 'fruta', component:FrutaComponent},
	{path: 'home', component:HomeComponent},
	{path: 'contacto', component:ContactoComponent},
	{path: '**', component:HomeComponent}
];

export const appRoutingProviders:any[]=[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)