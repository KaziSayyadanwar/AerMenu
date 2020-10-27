import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../db.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common/'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  ListData: MatTableDataSource<any>;
  displayColumns: string[] = ['order ID', 'User', 'orderDate', 'Amount'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchkey: any;
  pastOrders: any
  startDate: Date = new Date()
  selectedDateItems: any
  reportInfo: boolean = false
  totalAmount: any
  endDate: Date = new Date()

  constructor(private router: Router, private db: DBService, public datepipe: DatePipe) { }
  onSearchClear() {
    this.searchkey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.ListData.filter = this.searchkey.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.db.getPastOrders().subscribe((data) => {
      this.pastOrders = data['details'];
      this.ListData = new MatTableDataSource(this.pastOrders);
      this.ListData.paginator = this.paginator;
    });
  }

  getReport() {
    this.reportInfo = true
    this.selectedDateItems = this.pastOrders.filter((obj) => {
      return (this.datepipe.transform(obj.timeStamp, 'dd/MM/yyyy') >= this.datepipe.transform(this.startDate, 'dd/MM/yyyy') && this.datepipe.transform(obj.timeStamp, 'dd/MM/yyyy') <= this.datepipe.transform(this.endDate, 'dd/MM/yyyy'))
    })
    this.ListData = new MatTableDataSource(this.selectedDateItems);
    this.totalAmount = 0
    for (let key in this.selectedDateItems) {
      this.totalAmount = this.totalAmount + (this.selectedDateItems[key].totalAmount)

    }
    console.log(this.totalAmount)
  }
  clearReport() {
    this.db.getPastOrders().subscribe((data) => {
      this.pastOrders = data['details'];
      this.ListData = new MatTableDataSource(this.pastOrders);
      this.ListData.paginator = this.paginator;
    });
    this.reportInfo = false

  }

}
