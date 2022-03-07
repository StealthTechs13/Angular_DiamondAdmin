import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account-service';
import { UiService } from 'src/app/services/ui-service';
import { PagerService } from 'src/app/services/pager.service';


@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.scss']
})
export class OnlineUsersComponent implements OnInit {
  pageNo: number = 1;
  totalCount:number=0;
  constructor(private accountService:AccountService,public uISERVICE:UiService,public pagerService: PagerService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.accountService.getOnlineUserList(this.uISERVICE.skipRec).then((response) => {      
      if (response.Status) {
        this.uISERVICE.retunData = response.Result;
        this.totalCount=response.Count;
        this.pagerService.getPager(response.Count, this.pageNo, 10);
      } else {
        this.uISERVICE.retunData = [];
      }
    });
  }

  pageChanged(pageNo) {   
    this.pageNo = pageNo;
    this.uISERVICE.skipRec = (pageNo - 1) * 10;
    this.getUserList();
  }

  searchRecord(value) {
    this.accountService.searchOnlineUserRecord(value).then((response) => {      
      if (response.Status == true) {
        this.uISERVICE.retunData = response.Result;
      } else {
        this.getUserList();
      }
    });
  }

  logOut(userId){
    this.accountService.logOut(userId).then((response) => {      
      if (response.Status == true) {
        this.uISERVICE.sucMsg=true;
        this.uISERVICE.Message="Executed Successfully";
        setTimeout(() => {
          this.uISERVICE.sucMsg=false;
        }, 3000);
        this.pageChanged(1);
      }else{
        this.uISERVICE.errorMsg=true;
        this.uISERVICE.Message="Execution Failed";
        setTimeout(() => {
          this.uISERVICE.errorMsg=false;
        }, 3000);
      }
    });
  }

  logOutAll(){
    this.accountService.logOutAll().then((response) => {      
      if (response.Status == true) {
        this.uISERVICE.sucMsg=true;
        this.uISERVICE.Message="Executed Successfully";
        setTimeout(() => {
          this.uISERVICE.sucMsg=false;
        }, 3000);
        this.pageChanged(1);
      }else{
        this.uISERVICE.errorMsg=true;
        this.uISERVICE.Message="Execution Failed";
        setTimeout(() => {
          this.uISERVICE.errorMsg=false;
        }, 3000);
      }
    });
  }

}
