import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-table-soccer',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
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

  ngOnInit(): void {
  }

}
