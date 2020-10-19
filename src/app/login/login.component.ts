import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  alert: boolean;
  constructor(private router: Router, public db: DBService) {}

  ngOnInit(): void {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 1000);
  }
  onLogin() {
    if (this.db.loginForm.valid) {
      this.db.login(
        this.db.loginForm.value.emailId,
        this.db.loginForm.value.password
      );
    }

    // console.log(this.db.loginForm.value);
    // console.log(this.db.getUserState().subscribe((res) => {}));
    // this.router.navigate(['/shared']);
  }
}