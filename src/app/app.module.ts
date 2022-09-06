import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsItemsComponent } from './components/news-items/news-items.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ScoreDynamiqueComponent } from './components/score-dynamique/score-dynamique.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { MATChComponent } from './components/match/match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';

import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AsterixPipe } from './Pipe/asterix.pipe';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { HttpClientModule } from "@angular/common/http";
import { TeamComponent } from './components/team/team.component';
import { DataComponent } from './components/data/data.component';
import { DisplayPlayerByIdComponent } from './components/display-player-by-id/display-player-by-id.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { StadiumFormComponent } from './components/stadium-form/stadium-form.component';
import { StadiaTableComponent } from './components/stadia-table/stadia-table.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { WeatherComponent } from './components/weather/weather.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    RankingComponent,
    VideosComponent,
    BlogComponent,
    NewsItemsComponent,
    ArticleComponent,
    HomeComponent,
    SignupComponent,
    AddMatchComponent,
    AddTeamComponent,
    AdminComponent,
    BannerComponent,
    MatchesComponent,
    ScoreDynamiqueComponent,
    AddPlayerComponent,
    PlayersComponent,
    MATChComponent,
    DisplayMatchComponent,
   
    EditMatchComponent,
    AsterixPipe,
    EditPlayerComponent,
    TeamComponent,
    DataComponent,
    DisplayPlayerByIdComponent,
    SearchComponent,
    SearchFilterComponent,
    StadiumFormComponent,
    StadiaTableComponent,
    WeatherComponent,
    LoaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],  /* n7otou service*/
  bootstrap: [AppComponent]
})
export class AppModule { }
