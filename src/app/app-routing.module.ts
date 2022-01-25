import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AfterLoginComponent } from './after-login/after-login.component';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'after-login', component: AfterLoginComponent, canActivate: [AuthGuardService]}, 
  {path: '', redirectTo: 'AppComponent', pathMatch:'full'},
  {path: '**', redirectTo: 'AppComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }