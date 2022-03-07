import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account-service';
import { UiService } from 'src/app/services/ui-service';

@Component({
  selector: 'app-profit-loss-statement',
  templateUrl: './profit-loss-statement.component.html',
  styleUrls: ['./profit-loss-statement.component.scss']
})
export class ProfitLossStatementComponent implements OnInit {
  type: string;
  public getId: any = [];
  pageType: string;
  marketId: string;
  selectionId: string;
  userId: string;
  plusData: any = [];
  minusData: any = [];
  total:number=0;
  resultCards:any=[];
  winnerName:string;
  Market:string;
  roundId:string;
  typeMarket:number=0;
  andarCards: any = [];
  baharCards: any = [];
  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute, public uISERVICE: UiService) { }

  ngOnInit(): void {
    this.uISERVICE.retunData = [];
    this.getId = this.route.params.subscribe(params => {
      this.marketId = params['marketId'];
      this.pageType = params['type'];
      this.selectionId = params['selectionId'];
      this.userId = params['userId'];
    });
    if (this.pageType == "FANCY") {
      this.getFancyBets();
    } else {
      this.getMarketBets();
      this.getMarketSharingDetails();
    }
  }


  checkBack() {
    if (this.pageType == "FANCY") {
      this.router.navigate(['/fancy-profitloss/', this.marketId]);
    } else {
      this.router.navigate(['/showmatchbet/', this.marketId]);
    }
  }

  getMarketBets() {
    debugger;
    this.accountService.getMarketBetsOfUser(this.userId, this.marketId)
      .then((response) => {
        debugger;
        if (response.Status) {
          this.uISERVICE.retunData = response.Result;
        } else {
          this.uISERVICE.retunData = [];
        }
      });
  }

  getFancyBets() {
    this.accountService.getFancyBetsOfUser(this.userId, this.marketId, this.selectionId)
      .then((response) => {
        if (response.Status) {
          this.uISERVICE.retunData = response.Result;
        } else {
          this.uISERVICE.retunData = [];
        }
      });
  }

  keyUp(value) {
    if (this.type == "FANCY") {
      this.searchFancyBets(value);
    } else {
      this.searchMarketBets(value);
    }
  }

  searchMarketBets(value) {
    debugger;
    this.accountService.searchMarketBetsOfUser(this.userId, this.marketId, value)
      .then((response) => {
        debugger;
        if (response.Status) {
          this.uISERVICE.retunData = response.Result;
        } else {
          if (this.type == "FANCY") {
            this.getFancyBets();
          } else {
            this.getMarketBets();
          }
        }
      });
  }

  searchFancyBets(value) {
    this.accountService.searchFancyBetsOfUser(this.userId, this.marketId, this.selectionId, value)
      .then((response) => {
        if (response.Status) {
          this.uISERVICE.retunData = response.Result;
        } else {
          this.uISERVICE.retunData = [];
        }
      });
  }

  getMarketSharingDetails() {
    this.accountService.getMarketSharingDetails(this.marketId, this.userId)
      .then((response) => {
        debugger;
        if (response.Status) {
          this.total=response.Result.total;
          response.Result.plusMinuAccounts.forEach(element => {
            if (element.marketType == 'Plus') {
              this.plusData.push(element);
            } else {
              this.minusData.push(element);
            }
          });;
        } else {
          this.plusData = [];
          this.minusData = [];
        }
      });

  }

  getResultCards(roundId,WinnerName,Type){
    this.winnerName=WinnerName;
    this.Market=Type;
    this.roundId=roundId;
    this.andarCards=[];
    this.baharCards=[];
    this.resultCards=[];
    if (this.Market.includes('Test Teenpatti')) {
      this.typeMarket = 3;
    } else if (this.Market.includes('Lucky')) {
      this.typeMarket = 7;
    } else if (this.Market.includes('Andar')) {
      this.typeMarket = 122;
    }
    else {
      this.typeMarket = 0;
    }
    this.accountService.getResult(roundId).then((response) => {
      if (response.Status) {
      this.resultCards=response.Result;
      if (this.typeMarket == 122) {
        this.resultCards.forEach((element, id) => {
          if (id > 2) {
            debugger;
            if (element != "") {
              if (id % 2 == 0) {
                this.andarCards.push(element);
              } else {
                this.baharCards.push(element);
              }
            }
          }
        });
      }
      } else {
        this.resultCards=[];
      }
    });
  }


}
