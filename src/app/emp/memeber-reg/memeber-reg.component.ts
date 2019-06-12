import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Form } from '@angular/forms';
import { Memeber } from 'src/app/memeber';
@Component({
  selector: 'app-memeber-reg',
  templateUrl: './memeber-reg.component.html',
  styleUrls: ['./memeber-reg.component.css']
})
export class MemeberRegComponent implements OnInit {

  constructor() { }
  date=new Date('12-12-1999')
  memberModel=new Memeber('Meherdip',9850502218,'male','amravati','A458778','${date}')
  memberdata:any
  ngOnInit() {
  }


  loaddata(){
 console.log(this.memberModel)
  }
}
