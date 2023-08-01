import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productName : string = "angular";
  public productversion : number = 16;
  public productstatus : string = "Good in speed";
  public proStatus : string = "In-transition";
  public skillName : string = "Angular";
  public skills : Array<string>= ["Javascript","Typescript","Angular","Node"]
  public team : Array<string> = ["Monika","priya","gajkant","shilpa"]
  public Indiaplayers : Array<string> = ["rohit sharma","virat Kohli","sachin Tendulkar","suresh raina","hardik pandya","mahendrasigh dhoni"]
  public leaders : Array<string>= ["lokmanya tilak","dr.babasaheb ambedkar","lalbahadur shastri","mahatma gandhi"]
  public brands : Array<string> = ["mi","titan","fasttrack","syska","fossil"]
  constructor() { }

  ngOnInit(): void {
  }

  getproductversion(){
    return this.productversion;
  }
}
