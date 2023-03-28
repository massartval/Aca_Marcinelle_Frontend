import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './pages/browse/browse.component';
import { PersonComponent } from './components/person/person.component';
//import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'browse', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent},
  //{ path: 'browse', component: BrowseComponent}
  { path: 'person/:id', component: PersonComponent },
  { path: 'browse', component: BrowseComponent},
  //{ path: 'browse/:resource', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
