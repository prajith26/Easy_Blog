import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  public show:boolean = false;
  constructor() { }

  Msg = {
    name: '',
    Lname: '',
    email:'',
    subject:'',
    message:''
  }

  ngOnInit(): void {
  }
  sendmsg(){
    this.show=true;
  }
  reload(){
    window.location.reload();
  }
}
