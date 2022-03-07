import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account-service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { UiService } from 'src/app/services/ui-service';

@Component({
  selector: 'app-lucky7',
  templateUrl: './lucky7.component.html',
  styleUrls: ['./lucky7.component.scss']
})
export class Lucky7Component implements OnInit {
  type: number;
  Mtype: string = "MATCH_ODDS";
  sportsId: number;
  eventId: string;
  CurrentPosition: any = [];
  public _setIntervalHandler: any;
  IframeUrl: SafeUrl;
  url: string;
  marketName: string;
  Status: boolean = false;
  returnData: any = [];
  marketType: string;
  marketId: string='0';
  BetsData: any = [];
  resultData: any = [];
  roundData: any = [];
  userSettings: any = [];
  minStake: number = 0;
  maxStake: number = 0;
  roundId: string;
  winnerId: number = 0;
  IsCheckResponse: boolean = false;
  profitLossData:any=[];
  currentPosition:any=[];
  password: string = "DeleteMyBet";
  newPassword: string;
  betId: number;
  msgBool: boolean = false;
  betsData: any = [];
  searchActive: boolean = false;
  searchType: string;
  betType: string = "All";
  resultCards:any=[];
  winnerName:string;
  Market:string;
  resultRoundId:string;
  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer, private http: HttpClient, public uISERVICE: UiService) { }

  ngOnInit(): void {
    if (Cookie.check("AdminCookies")) {
      this.route.paramMap.subscribe(params => {
        this.type = parseInt(params.get('type'));
      });
      this.sportsId = 11;
      switch (this.type) {
        case 7:
          this.marketName = "Lucky7-A";
          break;
        case 8:
          this.marketName = "Lucky7-B";
          break;
      }
      this.getUserSettings();
      setTimeout(() => {
        this.getCurrentPosition();
        this.getMarketBets(this.Mtype); 
        this.myfunction();               
        this.getResultList();        
      }, 3000);
    }
  }
  ngOnDestroy() {
    clearInterval(this._setIntervalHandler);
  }

  deleteUserBets() {
    if (this.password == this.newPassword) {
      this.accountService.deleteUserBet(this.betId, this.marketType).then((response) => {
        if (response.Status) {
          this.msgBool = true;
          this.uISERVICE.sucMsg = true;
          this.uISERVICE.Message = "Executed Successfully";
          this.getMarketBets(this.marketType);
          document.getElementById('closeBtn').click();
          //document.getElementById('closeBetBtn').click();
          setTimeout(() => {
            this.uISERVICE.sucMsg = false;
            this.msgBool = false;
          }, 3000);
        } else {
          this.msgBool = true;
          this.uISERVICE.errorMsg = true;
          this.uISERVICE.Message = response.Result;
          setTimeout(() => {
            this.uISERVICE.errorMsg = false;
            this.msgBool = false;
          }, 3000);
        }
      });
    } else {
      this.msgBool = true;
      this.uISERVICE.errorMsg = true;
      this.uISERVICE.Message = "Wrong Password";
      setTimeout(() => {
        this.uISERVICE.errorMsg = false;
        this.msgBool = false;
      }, 3000);
    }

  }

  async getLuck7Data() {
      this.IsCheckResponse = true;
      debugger;
      switch (this.type) {
        case 7:
          await this.http.get("http://157.245.107.51/tapapi2/lucky7.php").subscribe(data => {
            this.returnData[0] = data;            
            if (this.marketId != this.returnData[0].data.t1[0].mid) {
              this.BetsData = [];
              this.currentPosition = [];
            }            
            this.marketId = this.returnData[0].data.t1[0].mid;
            this.IsCheckResponse = false;
          });
          break;
        case 8:
          await this.http.get("http://157.245.107.51/tapapi2/lucky7b.php").subscribe(data => {
            this.returnData[0] = data;
            if (this.marketId != this.returnData[0].data.t1[0].mid) {
              this.BetsData = [];    
              this.currentPosition = [];          
            }
            this.marketId = this.returnData[0].data.t1[0].mid;
            this.IsCheckResponse = false;
          });
          break;
      }
  }

  myfunction() {
    this._setIntervalHandler = setInterval(() => {
      if (this.IsCheckResponse == false) {
        this.getLuck7Data();
      }
    }, 1500);
  }

  getUserSettings() {
    this.accountService.GetUserSettingBySportsId(Cookie.get('FixUserId'), this.uISERVICE.sportsId).then((response) => {
      if (response.Status) {
        debugger;
        this.userSettings = response.Result;
        this.maxStake = this.userSettings.StakeMax;
        this.minStake = this.userSettings.StakeMin;
        this.getLuck7Data();
      } else {
        this.userSettings = response.Result;
        this.maxStake = this.userSettings.OddsMaxStake;
        this.minStake = this.userSettings.OddsMinStake;
        this.getLuck7Data();
      }
    });
  }

  getProfitLoss() {
    this.accountService.getProfitLoss(this.marketId, 11)
      .then((response) => {
        debugger;
        if (response.Status) {
          this.profitLossData = response.Result;
        } else {
          this.profitLossData = response.Result;
        }
      });
  }

  getCurrentPosition() {
    this.accountService.getCurrentPosition(this.marketId).then((response) => {
      if (response.Status) {
        this.currentPosition = response.Result;       
      } else {
        this.currentPosition = [];
      }
    });
  }

  getInnerCurrentPosition(role, userName) {
    if (role != "Client") {
      this.accountService.getInnerCurrentPosition(role, userName, this.marketId).then((response) => {
        if (response.Status) {
          this.currentPosition = response.Result;
        } else {
          this.currentPosition = [];
        }
      });
    }
  }
  

  getResultList() {
    if (this.type == 7) {
      this.http.get("http://157.245.107.51/tapapi2/lucky7result.php").subscribe(data => {
        this.resultData[0] = data;
      });
    } else if (this.type == 8) {
      this.http.get("http://157.245.107.51/tapapi2/lucky7bresult.php").subscribe(data => {
        this.resultData[0] = data;
      });
    }
  }

  getMarketBets(type) {
    this.Mtype = type;
    this.accountService.getMarketBets(this.marketId, this.Mtype).then((response) => {
      debugger;
      if (response.Status) {
        this.betsData = response.Result;
      } else {
        this.betsData = [];
      }
    });
  }

  getBetType(value) {
    this.betType = value;
    if (this.Mtype != "MATCH_ODDS") {
      if (value == "Back") {
        this.betType = "Yes";
      } else if (value == "Lay") {
        this.betType = "No";
      }
    }
    this.getFilterBets();
  }

  getFilterBets() {
    this.accountService.getFilterBets(this.marketId, this.Mtype, this.betType).then((response) => {
      if (response.Status) {
        this.betsData = response.Result;
      } else {
        this.betsData = [];
      }
    });
  }

  searchBets(value) {
    this.searchType = value;
    this.searchActive=true;
    this.accountService.searchBets(this.marketId, this.Mtype, value).then((response) => {
      if (response.Status) {
        if (value == "") {
          this.searchActive=false;
          this.getMarketBets(this.Mtype);
        } else {
          this.betsData = response.Result;
        }
      } else {
        this.searchActive=false;
        this.betsData = [];
      }
    });
  }

  


}
