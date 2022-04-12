import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModel } from '../article.model';
import { ArticledataService } from '../articledata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
  // singleItem ={
  //    _id: ' ',
  //    article_title: ' ',
  //    article_author: ' ',
  //    article_category: ' ',
  //    article_createdon: ' ',
  //    article_content: ' ',
  //    article_image: ' '
  // }
  singleItem : ArticleModel;
  id:string;
  constructor(public router:Router,private article:ArticledataService,private route:ActivatedRoute,public auth:AuthService) {
  }

  ngOnInit(): void {
    // this.singleItem=this.article.sharedPost;
    this.route.queryParams.subscribe(params=>{
      this.id= params['id'];
    })
    console.log(this.id)
    this.getArticle(this.id);
  }
  getArticle(id){
    this.article.getArticle(id)
    .subscribe((data) => {
      this.singleItem = JSON.parse(JSON.stringify(data));
    })
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
