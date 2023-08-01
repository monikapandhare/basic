import { Component } from '@angular/core';
import { Iteam } from './shared/models/team';
import { Istates } from './shared/models/states';
import { IchifMinisters } from './shared/models/chifministers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic';

  Team :Array<Iteam> = [
    {
    fname : "monika",
    lname : "vaidya",
    email : "monika@gmail.com",
    profile : "front end developer",
    age : 26
  },
  {
    fname : "vinod",
    lname : "vaidya",
    email : "vinod@gmail.com",
    profile : "front end developer",
    age : 32
  },
  {
    fname : "vishal",
    lname : "vaidya",
    email : "vishal@gmail.com",
    profile : "angular developer",
    age : 23
  },
  {
    fname : "ashwini",
    lname : "vaidya",
    email : "ashwini@gmail.com",
    profile : "back end developer",
    age : 30
  },
];


states :Array<Istates> = [
  {
    name : "maharashtra",
    nation : "india",
    dist : 278,
    capital : "mumbai"
},
{
  name : "uttarpradesh",
  nation : "india",
  dist : 243,
  capital : "amravati"
},
{
  name : "punjab",
  nation : "india",
  dist : 178,
  capital : "luthiana"
},
{
  name : "arunachalpradesh",
  nation : "india",
  dist : 378,
  capital : "itanagar"
},
{
  name : "gujarat",
  nation : "india",
  dist : 278,
  capital : "gandhinagar"
}
];

chiefMinisters :Array<IchifMinisters>=[
 {
  name  :"eknath shinde",
  state : "maharashtra",
  tookOffice : "30 june 2022",
  party : "shivsena",
  age : 50
 },
 {
  name  :"pramod sawant",
  state : "goa",
  tookOffice : "19 march 2019",
  party : "bjp",
  age : 48
 },
 {
  name  :"yogi adityanath ",
  state : "uttarprdash",
  tookOffice : "19 march 2017",
  party : "bjp",
  age : 55
 },
 {
  name  :"himanta biswa sharma",
  state : "assam",
  tookOffice : "10 may 2021",
  party : "bjp",
  age : 53
 },
 {
  name  :"y.s jaganmohan reddy",
  state : "andhrapradesh",
  tookOffice : "30 may 2019",
  party : "Yuvajana Shramika Rythu Congress Party",
  age : 45
 },
]




}




