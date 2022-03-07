import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { UsersComponent } from './components/users/users.component';
import { UserSettingComponent } from './components/user-setting/user-setting.component';
import { DetailedReportComponent } from './components/detailed-report/detailed-report.component';
import { CloseUserComponent } from './components/close-user/close-user.component';
import { SubAdminComponent } from './components/sub-admin/sub-admin.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OnlineUsersComponent } from './components/online-users/online-users.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AccountService } from './services/account-service';
import { BaseHttpService } from './services/base-http-service';
import { HttpClientModule } from "@angular/common/http";
import {AuthGuardService} from './services/auth-guard.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UiService } from './services/ui-service';
import { ModelService } from './services/model-service';
import { MsgComponenetComponent } from './components/msg-componenet/msg-componenet.component';
import { SportsComponent } from './components/sports/sports.component';
import { PagerService } from './services/pager.service';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { ResultFancyComponent } from './components/result-fancy/result-fancy.component';
import { ResultMarketComponent } from './components/result-market/result-market.component';
import { RollbackFancyComponent } from './components/rollback-fancy/rollback-fancy.component';
import { RollbackMatchComponent } from './components/rollback-match/rollback-match.component';
import { GeneralSettingComponent } from './components/general-setting/general-setting.component';
import { DatePipe } from '@angular/common';
import { SettlementSummaryComponent } from './components/settlement-summary/settlement-summary.component';
import { SettlementComponent } from './components/settlement/settlement.component';
import { ProfitLossStatementComponent } from './components/profit-loss-statement/profit-loss-statement.component';
import { ProfitLossComponent } from './components/profit-loss/profit-loss.component';
import { FancyProfitLossComponent } from './components/fancy-profit-loss/fancy-profit-loss.component';
import { ElectionDetailsComponent } from './components/election-details/election-details.component';
import { LivegameHistoryComponent } from './components/livegame-history/livegame-history.component';
import { CasinoDetailComponent } from './components/casino-detail/casino-detail.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { CurrentBetsComponent } from './components/current-bets/current-bets.component';
import { BetHistoryComponent } from './components/bet-history/bet-history.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { Lucky7Component } from './components/lucky7/lucky7.component';
import { AndarbaharComponent } from './components/andarbahar/andarbahar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralReportComponent } from './components/general-report/general-report.component';
import { GameReportComponent } from './components/game-report/game-report.component';
import { CasinoReportComponent } from './components/casino-report/casino-report.component';
import { CasinoReportResultComponent } from './components/casino-report-result/casino-report-result.component';
import { ProfitAndLossComponent } from './components/profit-and-loss/profit-and-loss.component';
import { BinaryComponent } from './components/binary/binary.component';
import { BinaryDetailComponent } from './components/binary-detail/binary-detail.component';
import { Race20Component } from './components/race20/race20.component';
import { CasinoQueenComponent } from './components/casino-queen/casino-queen.component';
import { BaccaratListComponent } from './components/baccarat-list/baccarat-list.component';
import { Baccarat2DetailComponent } from './components/baccarat2-detail/baccarat2-detail.component';
import { Baccarat1DetailComponent } from './components/baccarat1-detail/baccarat1-detail.component';
import { SportsCasinoListComponent } from './components/sports-casino-list/sports-casino-list.component';
import { SuperoverDetailComponent } from './components/superover-detail/superover-detail.component';
import { Cricket5DetailComponent } from './components/cricket5-detail/cricket5-detail.component';
import { Cricket2020DetailComponent } from './components/cricket2020-detail/cricket2020-detail.component';
import { CmeterDetailComponent } from './components/cmeter-detail/cmeter-detail.component';
import { CasinoWarComponent } from './components/casino-war/casino-war.component';
import { WorliComponent } from './components/worli/worli.component';
import { WorliMatkaComponent } from './components/worli-matka/worli-matka.component';
import { InstantWorliComponent } from './components/instant-worli/instant-worli.component';
import { CardJudgement3Component } from './components/card-judgement3/card-judgement3.component';
import { Card32Component } from './components/card32/card32.component';
import { Card32AComponent } from './components/card32-a/card32-a.component';
import { Card32BComponent } from './components/card32-b/card32-b.component';
import { LiveTeenpattiListComponent } from './components/live-teenpatti-list/live-teenpatti-list.component';
import { TeenpatiT20Component } from './components/teenpati-t20/teenpati-t20.component';
import { LivePokerListComponent } from './components/live-poker-list/live-poker-list.component';
import { PokerT20Component } from './components/poker-t20/poker-t20.component';
import { AndarBaharListComponent } from './components/andar-bahar-list/andar-bahar-list.component';
import { AndarBahar2Component } from './components/andar-bahar2/andar-bahar2.component';
import { Lucky7ListComponent } from './components/lucky7-list/lucky7-list.component';
import { DtListComponent } from './components/dt-list/dt-list.component';
import { DtDetailComponent } from './components/dt-detail/dt-detail.component';
import { BollywoodCasinoListComponent } from './components/bollywood-casino-list/bollywood-casino-list.component';
import { BcasinoDetailComponent } from './components/bcasino-detail/bcasino-detail.component';
import { CricketCasinoComponent } from './components/cricket-casino/cricket-casino.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { ElectionComponent } from './components/election/election.component';
import { IplComponent } from './components/ipl/ipl.component';
import { SecurityAuthComponent } from './components/security-auth/security-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    AddUserComponent,
    LoaderComponent,
    AddMatchesComponent,
    UsersComponent,
    UserSettingComponent,
    DetailedReportComponent,
    CloseUserComponent,
    SubAdminComponent,
    SignInComponent,
    OnlineUsersComponent,
    MsgComponenetComponent,
    SportsComponent,
    MatchListComponent,
    MatchDetailsComponent,
    ResultFancyComponent,
    ResultMarketComponent,
    RollbackFancyComponent,
    RollbackMatchComponent,
    GeneralSettingComponent,
    SettlementSummaryComponent,
    SettlementComponent,
    ProfitLossStatementComponent,
    ProfitLossComponent,
    FancyProfitLossComponent,
    ElectionDetailsComponent,
    LivegameHistoryComponent,
    CasinoDetailComponent,
    AccountStatementComponent,
    CurrentBetsComponent,
    BetHistoryComponent,
    Lucky7Component,
    AndarbaharComponent,
    GeneralReportComponent,
    GameReportComponent,
    CasinoReportComponent,
    CasinoReportResultComponent,
    ProfitAndLossComponent,
    BinaryComponent,
    BinaryDetailComponent,
    Race20Component,
    CasinoQueenComponent,
    BaccaratListComponent,
    Baccarat2DetailComponent,
    Baccarat1DetailComponent,
    SportsCasinoListComponent,
    SuperoverDetailComponent,
    Cricket5DetailComponent,
    Cricket2020DetailComponent,
    CmeterDetailComponent,
    CasinoWarComponent,
    WorliComponent,
    WorliMatkaComponent,
    InstantWorliComponent,
    CardJudgement3Component,
    Card32Component,
    Card32AComponent,
    Card32BComponent,
    LiveTeenpattiListComponent,
    TeenpatiT20Component,
    LivePokerListComponent,
    PokerT20Component,
    AndarBaharListComponent,
    AndarBahar2Component,
    Lucky7ListComponent,
    DtListComponent,
    DtDetailComponent,
    BollywoodCasinoListComponent,
    BcasinoDetailComponent,
    CricketCasinoComponent,
    AccountListComponent,
    AddAccountComponent,
    ElectionComponent,
    IplComponent,
    SecurityAuthComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgIdleKeepaliveModule.forRoot(),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, DatePipe, AccountService, BaseHttpService, AuthGuardService,UiService,ModelService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
