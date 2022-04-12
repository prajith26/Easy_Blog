import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService, public router:Router) { }

  ngOnInit(): void {
  }
  userData = {
    name: "",
    email: "",
    password: "",
    checkbox:false
  }
  userRegister() {
    this.auth.newUser(this.userData)
      .subscribe((data) => {
        console.log(data);
        alert(JSON.parse(JSON.stringify(data)).message);
        this.router.navigate(['/login']);
      });
      // window.location.reload();
  }

}
