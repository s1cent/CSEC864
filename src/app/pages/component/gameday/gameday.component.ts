import {Component, Input, OnInit} from '@angular/core';

function createAScore() {
  return Math.floor(Math.random() * (4 + 1)) + " : " + Math.floor(Math.random() * (4 + 1) );
}

@Component({
  selector: 'cc-gameday',
  templateUrl: './gameday.component.html',
  styleUrls: ['./gameday.component.scss']
})
export class GamedayComponent implements OnInit {
  @Input() gameDay = 1
  constructor() { }
  soccerTable = [{homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},{homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},
    {homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},{homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},
    {homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},{homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},{homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},
    {homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"},{homeTeam: "Manchester United", score: createAScore(), awayTeam: "Manchester City"}]
  ngOnInit(): void {
  }

}
