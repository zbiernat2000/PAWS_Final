import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispenseListComponent } from './dispense-list/dispense-list.component'
import { CreateDispenseComponent } from './create-dispense/create-dispense.component'
import { UpdateDispenseComponent} from './update-dispense/update-dispense.component'

const routes: Routes = [  {path: 'dispenses', component: DispenseListComponent},
{path: '', redirectTo: 'dispenses', pathMatch:'full'},
{path: 'create-dispense', component: CreateDispenseComponent},
{path: 'update-dispenses/:id', component: UpdateDispenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
