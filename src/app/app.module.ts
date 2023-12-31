import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryListComponent,
    ProductListComponent,
    HomeComponent,
    AdminHomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
