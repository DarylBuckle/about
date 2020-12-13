import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutScreenComponent } from './about-screen/about-screen.component';

const routes: Routes = [
  { path: '', component: AboutScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
