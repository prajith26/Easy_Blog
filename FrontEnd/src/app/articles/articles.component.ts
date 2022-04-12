import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleModel } from '../article.model';
import { ArticledataService } from '../articledata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:ArticleModel[];
  constructor(public router:Router, private article:ArticledataService, public auth:AuthService) { }

  ngOnInit(): void {
    this.getPost();
  
  }

  getPost(){
    this.article.getPost()
    .subscribe((data)=>{
      this.articles=JSON.parse(JSON.stringify(data))
    })
  }
  singlePost(element){
    this.article.sharedPost=element;
    this.router.navigate(['/home/single']);
  }

  edit(element){

  }
  delete(element){
    let x = confirm("Are you sure you want to delete")
    if (x){
      this.article.deletePost(element)
      .subscribe(
        (data)=>
        {
          console.log(data);
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
          this.router.navigate(['home'])
      },
      (err)=>{
        if (!err) {
          console.log("workin")
          // window.location.reload();
        }
        else {
          alert("Unauthorized Access")
          localStorage.removeItem('token');
          localStorage.removeItem('name');
          localStorage.removeItem('role');
          this.router.navigate(['home'])
        }
      })
    }
    
  }
}
