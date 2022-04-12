import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleModel } from '../article.model';
import { ArticledataService } from '../articledata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-updatearticle',
  templateUrl: './updatearticle.component.html',
  styleUrls: ['./updatearticle.component.css']
})
export class UpdatearticleComponent implements OnInit {

  postItem = null;
  postForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    imageurl: new FormControl(''),
    author: new FormControl('', Validators.required),
  })
  category = [
    {
      category_title: ' '
    }
  ];
  //image display properties
  imageWidth: number = 800;
  imageMargin: number = 2;
  get af() {
    return this.postForm.controls;
  }
  selectedImage: string;
  id: string;
  constructor(private article: ArticledataService, public router: Router, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.getArticle(this.id);
    // this.postItem.article_author=this.auth.getUserName();
    this.getCategory();
  }
  onSelectImage($event): void {
    this.readImageFile($event.target as HTMLInputElement);
  }

  readImageFile(img: any): void {
    var file: File = img.files[0];
    var reader: FileReader = new FileReader();
    // console.log(file)
    // console.log(reader)

    reader.onloadend = (e) => {
      this.selectedImage = reader.result as string;
      // console.log(this.selectedImage);
      this.postItem[0].article_image = this.selectedImage;
    // console.log(this.selectedImage)

    }
    reader.readAsDataURL(file);
  }

  updatePost() {
    console.log(this.postItem[0])
    this.article.editPost(this.postItem[0])
      .subscribe(
        data => {
          console.log(data)
          alert("Article updated successfully");
          this.router.navigate(['home']);
        },
        (err) => {
          if (!err) {
            console.log("No error in update comp")
            // window.location.reload();
          }
          else {
            alert("Unauthorized Access")
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('role');
            this.router.navigate(['home'])
          }
        });

  }

  getCategory() {
    this.article.getCategory()
      .subscribe(
        (data) => {
          this.category = JSON.parse(JSON.stringify(data));
          console.log(this.category)
        })
  }
  getArticle(id) {
    console.log(id);
    this.article.getArticle(id)
      .subscribe((data) => {
        this.postItem = JSON.parse(JSON.stringify(data));
      })
  }


}
