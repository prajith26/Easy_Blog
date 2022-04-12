import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticledataService } from '../articledata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category = [
    {
      category_title: ' '
    }
  ];

  constructor(private article: ArticledataService, public router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.article.getCategory()
      .subscribe(
        (data) => {
          this.category = JSON.parse(JSON.stringify(data));
          console.log(this.category)
        })
  }

  selectCat(element) {
    this.article.selectedCat = element;
    console.log(element)
    this.router.navigate(['/home'])
    console.log("hey")
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    // this.router.navigate(['/home/categorylist'])
    this.router.navigateByUrl(`/home/categorylist?category_title=${element}`)
  }

  

}


// [routerLink]="['/home/single']" [queryParams]="{article_category:element.article_category}"