import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `habitats`, loadChildren: () =>
      import('./pages/habitats/habitats.module').then(m => m.HabitatsModule)
  },
  {
    path: `animals`, loadChildren: () =>
      import('./pages/animals/animals.module').then(m => m.AnimalsModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
