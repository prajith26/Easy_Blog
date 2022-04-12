import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { ArticleModel } from '../article.model';
import { ArticledataService } from '../articledata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  category={
    article_category:' '
  };
  catArticles:ArticleModel[];
  constructor(public router:Router,private article:ArticledataService,private route: ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
    console.log("hi")
    this.route.queryParams.subscribe(params=>{
      this.category.article_category= params['category_title'];
    })
    // this.category.article_category=this.article.selectedCat;
    this.getCategoryList(this.category);
  }
  getCategoryList(item){
    this.article.getCategoryList(item)
    .subscribe((data)=>{
      this.catArticles=JSON.parse(JSON.stringify(data));
      console.log(this.catArticles)
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
