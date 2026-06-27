import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component/home.component';
import { HistoriasClinicasComponent } from './features/historias-clinicas/pages/historias-clinicas.component/historias-clinicas.component';
import { HistoriasClinicasCrearComponent } from './features/historias-clinicas/pages/historias-clinicas-crear.component/historias-clinicas-crear.component';
import { HistoriasClinicasEditarPorIdComponent } from './features/historias-clinicas/pages/historias-clinicas-editar-por-id.component/historias-clinicas-editar-por-id.component';
import { HistoriasClinicasVerPorIdComponent } from './features/historias-clinicas/pages/historias-clinicas-ver-por-id.component/historias-clinicas-ver-por-id.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'historias-clinicas', component: HistoriasClinicasComponent },
  { path: 'historias-clinicas/crear', component: HistoriasClinicasCrearComponent },
  { path: 'historias-clinicas/editar/:id', component: HistoriasClinicasEditarPorIdComponent },
  { path: 'historias-clinicas/ver/:id', component: HistoriasClinicasVerPorIdComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
