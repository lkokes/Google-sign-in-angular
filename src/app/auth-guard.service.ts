import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private socialAuthService: SocialAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.socialAuthService.authState.pipe(
        map((socialUser: SocialUser) => !!socialUser),
        tap((isLoggedIn: boolean) => {
          if(!isLoggedIn){
            this.router.navigate(['after-login'])
          }
        })
      )
  }
}


