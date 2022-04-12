import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ArticlesComponent } from './articles/articles.component';
import { NewpostComponent } from './newpost/newpost.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { ManageadminsComponent } from './manageadmins/manageadmins.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { UpdatearticleComponent } from './updatearticle/updatearticle.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ArticlesComponent,
    NewpostComponent,
    NewcategoryComponent,
    ManageadminsComponent,
    SinglepostComponent,
    CategorylistComponent,
    UpdatearticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
