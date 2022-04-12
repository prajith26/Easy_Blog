import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  User = {
    email: '',
    password: ''
  }

  userVerify() {
    console.log(this.User)
    this.auth.loginUser(this.User)
      .subscribe(
        data => {
          // if (this.User.username == 'admin@gmail.com') {
          //   localStorage.setItem("isAdmin", "true");       // write code here to navigate to admin dashboard
          //   this.router.navigate(['/dashboard/dashhome']);
          // }
          localStorage.setItem('token',JSON.parse(JSON.stringify(data)).token)
          localStorage.setItem('name',JSON.parse(JSON.stringify(data)).user.user_name)
          localStorage.setItem('role',JSON.parse(JSON.stringify(data)).user.user_role)
          alert(JSON.parse(JSON.stringify(data)).message);
          // alert(data.message);
          console.log(data);
           this.router.navigate(['/home']);                    // write code here to navigate to user dashboard
        },
        err => {
          alert(err.error.message)
        }
      )
  }
}
