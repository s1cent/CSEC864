import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  products = [{image: "test.jpg", name:"Seria A"}, {image: "test.jpg", name:"Seria A"}, {image: "test.jpg", name:"Seria A"},{image: "test.jpg", name:"Seria A"},
    {image: "test.jpg", name:"Seria A"} ,{image: "test.jpg", name:"Seria A"} ,{image: "test.jpg", name:"Seria A"}]
  constructor() { }

  ngOnInit(): void {
    console.log("Going in")
  }

}
