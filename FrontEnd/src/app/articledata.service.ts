import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from './article.model'

@Injectable({
  providedIn: 'root'
})
export class ArticledataService {

  readonly baseURL = '/api';
  sharedPost:ArticleModel;
  selectedCat:string;
  constructor(private http:HttpClient) { }

//Authenticated User CRUD on articles starts
  newPost(item){
    return this.http.post(this.baseURL+'/user/newarticle',item);
  }
  getPost(){
    return this.http.get(this.baseURL+'/user');
  }
  editPost(item){
    console.log(item._id)
    return this.http.put(this.baseURL+`/user/update/${item._id}`,item);
  }
  deletePost(item){
    return this.http.delete(this.baseURL+`/user/delete/${item._id}`);
  }
  getArticle(id){
    return this.http.get(this.baseURL+`/user/getdetails/${id}`);
  }
//Authenticated User CRUD on articles ends
  
//fetch articles based on category
  getCategoryList(item){
    console.log(item)
    return this.http.post(this.baseURL+'/user/categorylist',item)
  }


  //ADMIN Category start.................................
  newCategory(item){
    return this.http.post(this.baseURL+'/admin/addcategories',item);
  }
  getCategory(){
    return this.http.get(this.baseURL+'/admin/categories')
  }
  updateCategory(item){
    return this.http.put(this.baseURL+'/admin/updatecategory/',item);
  }
  deleteCategory(item){
    console.log(item.category_title)
    return this.http.post(this.baseURL+`/admin/deletecategory/${item._id}`,item);

  }
  
  //ADMIN Category end.................................

}
