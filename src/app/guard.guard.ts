import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { DBService } from './db.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  sessionState: any;

  constructor(
    private db: DBService,
    private router: Router,
    private auth: AngularFireAuth
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.sessionState = this.db.isLoggedIn();
    if (this.sessionState) {
      // this.sessionState = localStorage.getItem(
      //   'firebase:host:hungryfox-fba07.firebaseio.com'
      // );
      // setTimeout(() => {}, 3000);
      // if (this.sessionState) {
      //   return true;
      // }
      return true;
    } else {
      // alert(
      //   'You have been log out of the session, Please log in again to continue'
      // );
      // this.router.navigate(['']);
      return true;
    }
  }

}
