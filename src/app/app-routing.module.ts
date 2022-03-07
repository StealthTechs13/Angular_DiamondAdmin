import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { UsersComponent } from './components/users/users.component';
import { UserSettingComponent } from './components/user-setting/user-setting.component';
import { DetailedReportComponent } from './components/detailed-report/detailed-report.component';
import { CloseUserComponent } from './components/close-user/close-user.component';
import { SubAdminComponent } from './components/sub-admin/sub-admin.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { OnlineUsersComponent } from './components/online-users/online-users.component';
import { SportsComponent } from './components/sports/sports.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { ResultFancyComponent } from './components/result-fancy/result-fancy.component';
import { ResultMarketComponent } from './components/result-market/result-market.component';
import { RollbackFancyComponent } from './components/rollback-fancy/rollback-fancy.component';
import { RollbackMatchComponent } from './components/rollback-match/rollback-match.component';
import { GeneralSettingComponent } from './components/general-setting/general-setting.component';
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
import { Lucky7Component } from './components/lucky7/lucky7.component';
import { AndarbaharComponent } from './components/andarbahar/andarbahar.component';
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




const routes: Routes = [
  { path: '', redirectTo: 'sign_in', pathMatch: 'full' },
  { path: 'sign_in', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add_user', component: AddUserComponent },
  { path: 'add_matches', component: AddMatchesComponent },
  { path: 'user', component: UsersComponent },
  { path: 'user_setting', component: UserSettingComponent },
  { path: 'detailed_report/:userId/:role/:userName', component: DetailedReportComponent },
  { path: 'close_user', component: CloseUserComponent },
  { path: 'Result_Role', component: SubAdminComponent },
  { path: 'online_users', component: OnlineUsersComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'match_list/:sportsId/:seriesId/:name', component: MatchListComponent },
  { path: 'match_detail/:marketId/:eventId/:sportsId', component:  MatchDetailsComponent },
  { path: 'election_detail/:marketId/:eventId/:sportsId', component:  ElectionDetailsComponent },
  { path: 'result_fancy', component: ResultFancyComponent },
  { path: 'result_market', component: ResultMarketComponent },
  { path: 'rollback_fancy', component: RollbackFancyComponent },
  { path: 'rollback_match', component: RollbackMatchComponent },
  { path: 'general_setting', component: GeneralSettingComponent },
  { path: 'settlement_summary/:userId/:value', component: SettlementSummaryComponent },
  { path: 'settlement', component: SettlementComponent },
  { path: 'profit_loss_statement/:marketId/:type/:userId/:selectionId', component: ProfitLossStatementComponent },
  { path: 'profit_loss/:marketId/:userId', component: ProfitLossComponent },
  { path: 'fancy_profit_loss/:marketId/:userId', component: FancyProfitLossComponent },
  { path: 'live_game_history/:userId', component: LivegameHistoryComponent },
  { path: 'casino/:type', component: CasinoDetailComponent },
  { path: 'account_satement', component: AccountStatementComponent },
  { path: 'current_bets', component: CurrentBetsComponent },
  { path: 'bet_history', component: BetHistoryComponent },
  { path: 'Lucky7/:type', component: Lucky7Component },
  { path: 'ab/:type', component: AndarbaharComponent },
  { path: 'game-report', component: GameReportComponent },
  { path: 'general-report', component: GeneralReportComponent },
  { path: 'casino-report', component: CasinoReportComponent },
  { path: 'casino-report-result', component: CasinoReportResultComponent },
  { path: 'profit-and-loss', component: ProfitAndLossComponent },
  { path: 'binary', component: BinaryComponent },
  { path: 'binary-detail', component: BinaryDetailComponent },
  { path: 'race20', component: Race20Component },
  { path: 'casino-queen', component: CasinoQueenComponent },
  { path: 'baccarat-list', component: BaccaratListComponent },
  { path: 'baccarat2-detail', component: Baccarat2DetailComponent },
  { path: 'baccarat1-detail', component: Baccarat1DetailComponent },
  { path: 'sports-casino-list', component: SportsCasinoListComponent},
  { path: 'superover-detail', component: SuperoverDetailComponent},
  { path: 'cricket5-detail', component: Cricket5DetailComponent},
  { path: 'cricket2020-detail', component: Cricket2020DetailComponent},
  { path: 'cmeter-detail', component:  CmeterDetailComponent},
  { path: 'casino-war', component: CasinoWarComponent},
  { path: 'worli', component: WorliComponent},
  { path: 'instant-worli', component: InstantWorliComponent},
  { path: 'worli-matka', component: WorliMatkaComponent},
  { path: '3-card-judgement', component: CardJudgement3Component},
  { path: '32-card', component: Card32Component},
  { path: '32-card-a', component: Card32AComponent},
  { path: '32-card-b', component: Card32BComponent},
  { path: 'live-teenpatti-list', component: LiveTeenpattiListComponent},
  { path: 'teenpatti-t20', component: TeenpatiT20Component},
  { path: 'live-poker-list', component: LivePokerListComponent},
  { path: 'poker-t20', component: PokerT20Component},
  { path: 'andar-bahar-list', component: AndarBaharListComponent},
  { path: 'andar-bahar2', component: AndarBahar2Component},
  { path: 'lucky7-list', component: Lucky7ListComponent},
  { path: 'dt-list', component: DtListComponent},
  { path: 'dt-detail', component: DtDetailComponent},
  { path: 'bollywood-casino-list', component: BollywoodCasinoListComponent},
  { path: 'bcasino-detail', component: BcasinoDetailComponent},
  { path: 'cricket-casino', component: CricketCasinoComponent},
  { path: 'account-list', component: AccountListComponent},
  { path: 'add_account', component: AddAccountComponent},
  { path: 'election', component: ElectionComponent},
  { path: 'ipl', component: IplComponent},
  { path: 'security-auth', component: SecurityAuthComponent},

  
  
  
  
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
