import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';
import { DumyComponent } from './shared/components/dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    DumyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
