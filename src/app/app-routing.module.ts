import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CtComponent } from './components/ct/ct.component';
import { CcComponent } from './components/cc/cc.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ct', component: CtComponent },
  { path: 'cc', component: CcComponent },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
