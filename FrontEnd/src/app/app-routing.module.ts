import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuard } from './auth.guard';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageadminsComponent } from './manageadmins/manageadmins.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { NewpostComponent } from './newpost/newpost.component';
import { RegisterComponent } from './register/register.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { UpdatearticleComponent } from './updatearticle/updatearticle.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,
  children:[
    {path:'',component:ArticlesComponent},
    {path:'newpost',canActivate:[AuthGuard],component:NewpostComponent},
    {path:'newcat',canActivate:[AuthGuard],component:NewcategoryComponent},
    {path:'manageadmin',canActivate:[AuthGuard],component:ManageadminsComponent},    
    {path:'single',component:SinglepostComponent},    
    {path:'categorylist',component:CategorylistComponent}, 
    {path:'updatePost',canActivate:[AuthGuard],component:UpdatearticleComponent}   
  ]},
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
