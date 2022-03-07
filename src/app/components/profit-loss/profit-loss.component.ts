import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account-service';
import { ActivatedRoute, Router } from "@angular/router";
import { UiService } from 'src/app/services/ui-service';

@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss']
})
export class ProfitLossComponent implements OnInit {
  public getId: any = [];
  markeId: string;
  userId:number;
  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute, public uISERVICE: UiService) {
  }

  ngOnInit(): void {
    this.uISERVICE.retunData=[];
    this.getId = this.route.params.subscribe(params => {
      this.markeId = params['marketId'];
      this.userId=params['userId'];
      this.uISERVICE.childRole=params.get('role');
      this.uISERVICE.userName = params.get('userName');
    });
     this.getUsePLOnMarket();
  }
  getUsePLOnMarket() {
    this.uISERVICE.loader=true;
    this.accountService.getOverAllPanDL(this.markeId,this.userId,this.uISERVICE.childRole).then((response) => {
      debugger;
      if (response.Status) {
        this.uISERVICE.retunData = response.Result.overAllPandLDTOs;
        this.uISERVICE.loader=false;
      } else {
        this.uISERVICE.retunData = [];
        this.uISERVICE.loader=false;
      }
    });
  }

}
