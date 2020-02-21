import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { LibroComponent } from './paginas/libro/libro.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';


const routes: Routes = [
  { path: '', redirectTo: 'libro', pathMatch: 'full' },
  { path: 'libro', component: LibroComponent },
  { path: 'libro/:id', component: DetalleComponent },
  { path: 'formulario', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
