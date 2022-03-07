import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui-service';


@Component({
  selector: 'app-msg-componenet',
  templateUrl: './msg-componenet.component.html',
  styleUrls: ['./msg-componenet.component.scss']
})
export class MsgComponenetComponent implements OnInit {

  constructor(public uISERVICE:UiService) { }

  ngOnInit(): void {
  }

}
