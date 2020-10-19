import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';

declare var $: any;

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  constructor(private db: DBService, public matDialog: MatDialog) { }

  table1: any;
  table2: any;
  table3: any;
  table4: any;
  table5: any;
  table6: any;
  takeAway: any;

  tableNo = '';
  options = false;
  notification: Array<[]>

  onCompleteOrder(item) {
    this.db.completeOrder(item);
  }

  ngOnInit() {
    // this.table1 = this.db.getTable1Items()
    this.db.getTable1Items().subscribe(data => {
      this.table1 = data
    })
    this.db.getTable2Items().subscribe(data => {
      this.table2 = data
    })
    this.db.getTable3Items().subscribe(data => {
      this.table3 = data
    })
    this.db.getTable4Items().subscribe(data => {
      this.table4 = data
    })
    this.db.getTable5Items().subscribe(data => {
      this.table5 = data
    })
    this.db.getTable6Items().subscribe(data => {
      this.table6 = data
    })
    this.db.getTakeAwayItems().subscribe(data => {
      this.takeAway = data["takeAway"]
    })

    this.db.getNotification().subscribe(data => {
      this.notification = data["orders"]
      this.notification.reverse()
    })



  }
  remove(message): void {
    // const index = this.notification.orders.indexOf(message);

    this.db.removeNotification(message)

    // if (index >= 0) {
    //   this.notification.orders.splice(index, 1);
    // }
  }
  table1Complete() {
    if (confirm("Are you sure to generate bill?")) {
      this.db.pushPastOrder(this.table1)
      this.db.clearTable1()
    }
  }
  table2Complete() {
    if (confirm('Do you want to proceed for bill?')) {
      this.db.pushPastOrder(this.table2)
      this.db.clearTable2()
    }
  }
  table3Complete() {
    if (confirm('Do you want to proceed for bill?')) {
      this.db.pushPastOrder(this.table3)
      this.db.clearTable3()
    }
  }
  table4Complete() {
    if (confirm('Do you want to proceed for bill?')) {
      this.db.pushPastOrder(this.table4)
      this.db.clearTable4()
    }
  }
  table5Complete() {
    if (confirm('Do you want to proceed for bill?')) {
      this.db.pushPastOrder(this.table5)
      this.db.clearTable5()
    }
  }
  table6Complete() {
    if (confirm('Do you want to proceed for bill?')) {
      this.db.pushPastOrder(this.table6)
      this.db.clearTable6()
    }
  }
  takeAwayComplete(item){
    if (confirm('Do you want to proceed for bill?')) {
      this.db.pushPastOrder(item)
      this.db.clearTakeaway(item)
    }
  }
  //get generate bill button

  getButton() {
    let num = Number(prompt("enter table number"))
    if (num === 1) {
      this.db.table1Btn()
    } else
      if (num === 2) {
        this.db.table2Btn()

      } else
        if (num === 3) {
          this.db.table3Btn()
        } else
          if (num === 4) {
            this.db.table4Btn()
          } else
            if (num === 5) {
              this.db.table5Btn()
            } else
              if (num === 6) {
                this.db.table6Btn()
              } else {
                alert("No table found")
              }

  }
  clearAllNotifications() {
    if (confirm("Once cleared can not be retrieved again! Do you want to clear all notifications")) {
      this.db.clearAllNotifications()
    }
  }
}
