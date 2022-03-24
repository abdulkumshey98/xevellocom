import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './desktop/components/top-nav/top-nav.component';
import { IndexHomeComponent } from './desktop/views/index-home/index-home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path: 'home', component: IndexHomeComponent, data: { title : "Xevello | India's leading Technology Consultancy services"}},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = []
