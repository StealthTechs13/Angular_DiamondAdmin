import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { Cookie } from 'ng2-cookies';
import { AccountService } from 'src/app/services/account-service';
import { UiService } from 'src/app/services/ui-service';
import { SIgnUpModel } from '../../models/Sign_Up_Model';
import { PartnerShipModel } from '../../models/PartnerShip_Model';
import { UserSettingModel } from '../../models/User_Setting_Model';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  public user_Setting_Model: UserSettingModel;
  prevIndex: number = 0;
  msgBool: boolean = false;
  constructor(private router: Router, private accountService: AccountService, private route: ActivatedRoute, public uISERVICE: UiService) { }

  ngOnInit(): void {
    if (Cookie.check("AdminCookies")) {
      this.getUserSetting();

      
      //UserSettingModel
      this.user_Setting_Model = <UserSettingModel>{
        SportsName: '',
        SportsId: 0,
        ComType: '',
        MatchCom: 0,
        SessinCom: 0,
        OddsMax: 0,
        OddsMin: 0,
        StakeMax: 0,
        StakeMin: 0,
        SessionMaxStake: 0,
        SessionMinStake: 0,
        MaxProfit: 0,
        BetDelay: 0,
        FancyDelay: 0,
      };
    } else {
      this.router.navigate(['/sign_in'])
    }

  }

  getUserSetting() {
    
    this.accountService.getUserSetting(this.uISERVICE.userId).then((response) => {
      
      if (response.Status) {
        this.uISERVICE.retunData = response.Result;

      }
    });
  }

  editFilterForeCasts(index, value, type) {
    if (type == "Fancy") {
      this.uISERVICE.retunData[index].FancyComType = value;
    } else {
      this.uISERVICE.retunData[index].MatchComType = value;
    }
  }

  editRecord(index) {
    this.uISERVICE.retunData[this.prevIndex].status = false;
    this.uISERVICE.retunData[index].status = true;
    this.prevIndex = index;
  }

  saveRecord(index) {
    this.uISERVICE.retunData[index].status = false;
    this.user_Setting_Model = this.uISERVICE.retunData[index];
    this.accountService.updateRecords(this.user_Setting_Model).then((response) => {
      debugger;
      if (response.Status) {
        this.msgBool = true;
        this.uISERVICE.sucMsg = true;
        this.uISERVICE.Message = "Executed Successfully";
        setTimeout(() => {
          this.msgBool = false;
          this.uISERVICE.sucMsg = false;
        }, 3000);
      } else {
        this.uISERVICE.retunData[index].status = true;
        this.msgBool = true;
        this.uISERVICE.errorMsg = true;
        this.uISERVICE.Message = response.Result;
        setTimeout(() => {
          this.msgBool = false;
          this.uISERVICE.errorMsg = false;
        }, 3000);
      }
    });

  }

}
