import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AfterLoginComponent } from './after-login/after-login.component';

const routes: Routes = [
  {path: 'after-login', component: AfterLoginComponent}, 
  {path: '', redirectTo: 'AppComponent', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }