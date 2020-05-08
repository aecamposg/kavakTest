import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ContentTopComponent } from './components/content-top/content-top.component';

const appRoutes: Routes = [
  { path: '', component: ContentTopComponent },
  { path: 'form', component: FormComponent },
  { path: 'problem', component: ProblemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
