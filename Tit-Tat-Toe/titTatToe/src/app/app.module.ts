import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { GameIntroPromptComponent } from './game-intro-prompt/game-intro-prompt.component';
import { GameMoveComponent } from './game-move/game-move.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameDashboardComponent,
    GameManagerComponent,
    GameIntroPromptComponent,
    GameMoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
