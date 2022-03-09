import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MenuItem} from "primeng/api";
import {GamedayComponent} from "../component/gameday/gameday.component";

@Component({
  selector: 'app-league-page',
  templateUrl: './league-page.component.html',
  styleUrls: ['./league-page.component.scss'],
  entryComponents:[GamedayComponent]
})
export class LeaguePageComponent implements OnInit {
  soccerTable = [{rank:1,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:2,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:3,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:4,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:5,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:6,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:7,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:8,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:9,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:10,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:11,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:12,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:13,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:14,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:15,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:16,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:17,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"},
    {rank:18,logo:"manU.png", game:25, wins:14, losses:2, draw:5, goals:"40:1", diff: "+39", team: "Manchester United", points:"2"}]
  products = [{image: "test.jpg", name:"Seria A"},
    {image: "test.jpg", name:"Seria A"},
    {image: "test.jpg", name:"Seria A"},
    {image: "test.jpg", name:"Seria A"},
    {image: "test.jpg", name:"Seria A"} ,
    {image: "test.jpg", name:"Seria A"} ,
    {image: "test.jpg", name:"Seria A"}]

  scrollableItems: MenuItem[];

  activeItem2: MenuItem;
  @ViewChild('container', { static: true, read: ViewContainerRef }) entry!: ViewContainerRef;

  constructor(private viewContainerRef: ViewContainerRef) {
    this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Day ${i + 1}`, icon: `pi pi-fw pi-display`,command:(event) => {
        this.loadComponent(i)
      }}));
    this.activeItem2 = this.scrollableItems[0];

  }

   loadComponent(i) {
     const component = this.viewContainerRef.createComponent(GamedayComponent);
     console.log(component)
  }

  ngOnInit(): void {
  }

}
