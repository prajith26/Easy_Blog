import { Component, OnInit } from '@angular/core';
import { RootuserService } from '../rootuser.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-manageadmins',
  templateUrl: './manageadmins.component.html',
  styleUrls: ['./manageadmins.component.css']
})
export class ManageadminsComponent implements OnInit {

  userData:UserModel[];
  constructor(private root:RootuserService) { }

  ngOnInit(): void {
  this.getData();
  }
  

  getData(){
    this.root.getUser()
    .subscribe((data)=>{
      console.log(JSON.parse(JSON.stringify(data)));
      this.userData=JSON.parse(JSON.stringify(data));
    },
    (err)=>{
      if(!err){
        window.location.reload();
      }
      else{
        alert("Unauthorized Access")
      }
    })
  }

  promote(element){
    this.root.promoteUser(element)
    .subscribe(data=>
      {
        console.log(data)
        window.location.reload();
      },
      (err)=>{
        if(!err){
          window.location.reload();
        }
        else{
          alert("Unauthorized Access")
        }
      })
  }

  demote(element){
    this.root.demoteUser(element)
    .subscribe(data=>
      {
        console.log(data)
        window.location.reload();
      },
      (err)=>{
        if(!err){
          window.location.reload();
        }
        else{
          alert("Unauthorized Access")
        }
      })
  }
}
