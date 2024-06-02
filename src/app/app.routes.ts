import { Routes } from '@angular/router';
import DashboardComponent from './components/dashboard/dashboard.component';
import AuthComponent from './components/auth/auth.component';
import CrudComponent from './components/crud/crud.component';
import { LoginComponent }  from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { OfertatrabajoComponent } from './components/ofertatrabajo/ofertatrabajo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListadoOfertasComponent } from './components/listado-ofertas/listado-ofertas.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'auth', component:AuthComponent},
    {path:'crud', component:CrudComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroComponent},
    {path:'oferta-trabajo', component:OfertatrabajoComponent},
    {path:'layout', component:LayoutComponent},
    {path:'listado-oferta', component:ListadoOfertasComponent},


    {path:'', redirectTo:'', pathMatch:'full'}
];
