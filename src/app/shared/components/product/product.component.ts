import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productName : string = "angular";
  public producversion : number = 16;
  public productstatus : string = "Good in speed"
  
  skills = ["Javascript","Typescript","Angular","Node"]
  team = ["Monika","priya","gajkant","shilpa"]
  Indiaplayers = ["rohit sharma","virat Kohli","sachin Tendulkar","suresh raina","hardik pandya","mahendrasigh dhoni"]
  leaders = ["lokmanya tilak","dr.babasaheb ambedkar","lalbahadur shastri","mahatma gandhi"]
  brands = ["mi","titan","fasttrack","syska","fossil"]
  constructor() { }

  ngOnInit(): void {
  }

}
