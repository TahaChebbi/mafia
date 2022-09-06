import { WeatherComponent } from './components/weather/weather.component';
import { StadiumFormComponent } from './components/stadium-form/stadium-form.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayPlayerByIdComponent } from './components/display-player-by-id/display-player-by-id.component';
import { DataComponent } from './components/data/data.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';

import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{path:"",component :HomeComponent},
{path:"login",component :LoginComponent},
{path:"signup",component :SignupComponent},
{path:"addMatch",component :AddMatchComponent},
{path:"addTeam",component :AddTeamComponent},
{path:"admin",component :AdminComponent},
{path:"matches",component :MatchesComponent},
{path:"player",component :AddPlayerComponent},
{path:"displayMatch/:id",component :DisplayMatchComponent},

{path:"editMatch/:id",component :EditMatchComponent},
{path:"editPlayer/:id",component :EditPlayerComponent},
{path:"displayPlayerId/:id",component :DisplayPlayerByIdComponent},
{path:"data",component :DataComponent},
{path:"search",component :SearchComponent},
{path:"searchFilter",component :SearchFilterComponent},
{path:"stadiumForm",component :StadiumFormComponent},
{path:"stadiumForm/:id",component :StadiumFormComponent},
{path:"weather",component :WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
