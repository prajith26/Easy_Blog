import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleModel } from '../article.model';
import { ArticledataService } from '../articledata.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  postItem = new ArticleModel(null,null,null,null,null,null,null);
  postForm = new FormGroup({
    name: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    content: new FormControl('',Validators.required),
    imageurl: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
  })
  category = [
    {
      category_title:' '
    }
  ];

  get af(){
    return this.postForm.controls;
  }
  selectedImage : string;

  constructor(private article: ArticledataService, public router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.postItem.article_author=this.auth.getUserName();
    this.getCategory();
  }
  onSelectImage($event):void {
    this.readImageFile($event.target as HTMLInputElement);
  }

  readImageFile(img:any):void{
    var file:File =img.files[0];
    var reader:FileReader = new FileReader();

    reader.onloadend = (e) => {
      this.selectedImage = reader.result as string;
      // console.log(this.selectedImage);
      this.postItem.article_image = this.selectedImage;
    }
    reader.readAsDataURL(file);
    console.log(this.selectedImage)

  }

  addPost(){
    this.article.newPost(this.postItem)
    .subscribe(
      data=>{
        console.log(data)
        alert("New Article Created");
        this.router.navigate(['home']);
      });
    // console.log('Called');
    
  }

  getCategory(){
    this.article.getCategory()
    .subscribe(
      (data)=>{
        this.category=JSON.parse(JSON.stringify(data));
        console.log(this.category)
      })
  }
}
