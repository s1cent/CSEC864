import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {TeamsPageComponent} from "./pages/teams-page/teams-page.component";
import {LeaguePageComponent} from "./pages/league-page/league-page.component";
import {GamedayComponent} from "./pages/component/gameday/gameday.component";

const routes: Routes = [
  { path:  '', component: HomePageComponent},
  { path:  'detail', component: DetailPageComponent},
  { path:  'teams', component: TeamsPageComponent},
  { path:  'detailLeague', component: LeaguePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
