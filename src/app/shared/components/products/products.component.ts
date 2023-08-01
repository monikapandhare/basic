import { Component, OnInit } from '@angular/core';

@Component({
  selector : "app-products",
  // selector: '[app-products]',
  // selector: '.app-products',
  templateUrl: './products.component.html',
  // template : `
  // <app-products></app-products>
  // `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 public IsDisabled : boolean = true;
 public productStatus : string = "No Product is Added Yet";
 public cartCount : number = 0;
 public searchPrdName! : string ;
  constructor() {
    console.log("Constructor of Products Component is called")
   }

  ngOnInit(): void {
    console.log("comp products is init")
    setTimeout(() => {
      // this.IsDisabled = false
      this.IsDisabled = !this.IsDisabled;
    },1000)
  }

  onProductAdd(){
    console.log("Btn is clicked !!!")
    this.cartCount++;
    // this.productStatus = `${this.cartCount} products are added in cart !!`"product is added in cart !!"
    if(this.cartCount === 1){
    this.productStatus = `${this.cartCount} product is added in cart !!`
    }else{
    this.productStatus = `${this.cartCount} products are added in cart !!`

    }
  }

  onProductSearch(eve : Event){
    // console.log("Input event works")
    let val = (eve.target as HTMLInputElement).value;
    console.log(val);
    this.searchPrdName = val;

  }

  onProductRemove(){
    this.cartCount--;
    if(this.cartCount < 1){
      this.productStatus = `No Product is Added Yet`
      }else{
      this.productStatus = `${this.cartCount} products are added in cart !!`
  
      }
    
  }
  ngOnDestroy() : void{

  }

}
