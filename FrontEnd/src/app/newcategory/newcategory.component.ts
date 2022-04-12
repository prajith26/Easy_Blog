import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticledataService } from '../articledata.service';


@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {
  articleData = {
    category_title: '',
    new_category: ''
  }
  category = [
    {
      _id: '',
      category_title: ' '
    }
  ];
  constructor(private article: ArticledataService, public router: Router) { }

  ngOnInit(): void {
    this.getCategory();
    console.log(this.category)
  }

  newCategory() {
    console.log(this.articleData)
    this.article.newCategory(this.articleData)
      .subscribe(
        (data) => {
          console.log(data)
          console.log("data")
          alert("New Category Added")
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
          this.router.navigate(['/home/newcat'])
        },
        (err) => {
          if (!err) {
            console.log("workin")
            // window.location.reload();
          }
          else {
            if (err.error.code == 11000) {
              alert("Category already exist")
              window.location.reload();
            }
            else {
              alert("Unauthorized Access")
              localStorage.removeItem('token');
              localStorage.removeItem('name');
              localStorage.removeItem('role');
              this.router.navigate(['home'])
            }

            // console.log(err.error.code)

          }
        })



  }

  getCategory() {
    this.article.getCategory()
      .subscribe(
        (data) => {
          this.category = JSON.parse(JSON.stringify(data));
          console.log(this.category)
        })
  }

  delete(element) {
    
    let x = confirm("Are you sure you want to delete the category");
    if (x == true) {
      this.article.deleteCategory(element)
        .subscribe(
          data => {
            console.log(data)
            // alert("Category deleted");
            window.location.reload();
          })
    }
    
  }

  updatecat(element) {
    this.articleData.category_title = element.category_title;
    this.articleData.new_category = prompt("Please make changes to the category", element.category_title);
    if (this.articleData.new_category != null) {
      console.log(this.articleData);

      this.article.updateCategory(this.articleData)
        .subscribe((data) => {
          console.log(data);
          window.location.reload();
        },
          (err) => {
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
