import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _authService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    this.router.navigate(['home'])
  }
}
