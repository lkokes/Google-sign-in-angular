import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  socialUser!: SocialUser;

  constructor(
    public socialAuthService: SocialAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.socialAuthService.signOut()
    .then(() => this.router.navigate(['']));;
  }

}