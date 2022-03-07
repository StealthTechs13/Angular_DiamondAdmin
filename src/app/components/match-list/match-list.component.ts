import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { AccountService } from 'src/app/services/account-service';
import { UiService } from 'src/app/services/ui-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketModel } from '../../models/Market_Model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  public market_Model: MarketModel;
  msgBool: boolean = false;
  name:string;
  constructor(private http: HttpClient,private accountService: AccountService, public uISERVICE: UiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (Cookie.check("AdminCookies")) {
      this.uISERVICE.retunData = [];
      this.route.paramMap.subscribe(params => {
        this.uISERVICE.sportsId = parseInt(params.get('sportsId'));
        this.uISERVICE.SeriesId = params.get('seriesId');
        this.name = params.get('name');
      });
      this.getMatchList();
      this.market_Model = <MarketModel>{
        SportsId: this.uISERVICE.sportsId,
        SeriesId: this.uISERVICE.SeriesId,
        SeriesName: '',
        MarketId: '',
        EventId: '',
        ScoreId: '',
        MarketName: '',
        MarketTime: '',
        MarketStatus: 0,
        MarketLiquidity: 1,
      };
    } else {
      this.router.navigate(['/sign_in']);
    }
  }

  getMatchList() {
    this.uISERVICE.loader = true;
    this.accountService.getMatchList(this.uISERVICE.sportsId, this.uISERVICE.SeriesId).then((response) => {
      
      if (response.Status) {
        this.uISERVICE.retunData = response.Result;
      } else {
        this.uISERVICE.retunData = [];
      }
      this.uISERVICE.loader = false;
    });
  }

  openMatch(i,EventId, MarketName, MarketTime) {
    this.uISERVICE.loader=true;
    this.market_Model.EventId = EventId;
    this.market_Model.MarketName = MarketName;
    this.market_Model.MarketTime = MarketTime;
    this.market_Model.SeriesName = this.name;
    this.accountService.openMatch(this.market_Model).then((response) => {
      
      if (response.Status) {
        this.uISERVICE.loader = false;
        this.msgBool = true;
        this.uISERVICE.sucMsg = true;
        this.uISERVICE.Message = response.Result;
        this.uISERVICE.retunData.splice(i,1);
        //this.openF2CMatches();
        setTimeout(() => {
          this.msgBool = false;
          this.uISERVICE.sucMsg = false;
        }, 4000);
      } else {
        this.uISERVICE.loader = false;
        this.msgBool = true;
        this.uISERVICE.errorMsg = true;
        this.uISERVICE.Message = response.Result;
        setTimeout(() => {
          this.msgBool = false;
          this.uISERVICE.errorMsg = false;
        }, 4000);
      }
    });
  }

  openF2CMatches() { ;
  this.http.post<{ ip: string }>('http://fix2club:81/api/MarketModels/PostMarketModel', this.market_Model)
  .subscribe(data => {
    debugger;
   
  });
  }

}
