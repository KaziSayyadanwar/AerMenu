import { Component, OnInit, ViewChild } from '@angular/core';
import { DBService } from '../db.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Category1VegComponent } from '../category1-veg/category1-veg.component';
import { Category1NonvegComponent } from '../category1-nonveg/category1-nonveg.component';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  veg: MatTableDataSource<any>;
  nonveg: MatTableDataSource<any>;

  displayColumns: string[] = [
    'Image',
    'itemName',
    'itemPrice',
    'itemDescription',
    'actions',
  ];
  searchkeyForVeg: any;
  searchkeyForNonveg: any;
  @ViewChild('paginatorForVeg', { read: MatPaginator })
  paginatorForVeg: MatPaginator;
  @ViewChild('paginatorForNonveg', { read: MatPaginator })
  paginatorForNonveg: MatPaginator;

  constructor(public dbService: DBService, public matDialog: MatDialog) { }

  ngOnInit() {
    this.dbService.getCategory1().subscribe((data) => {
      let arrVeg = data["veg"]
      let veg = _.sortBy(arrVeg, "ItemName")
      let arrNonveg = data["nonVeg"]
      let nonveg = _.sortBy(arrNonveg, "ItemName")
      //veg menu
      this.veg = new MatTableDataSource(veg);

      this.veg.paginator = this.paginatorForVeg;
      //vonvg menu
      this.nonveg = new MatTableDataSource(nonveg);

      this.nonveg.paginator = this.paginatorForNonveg;
    });
  }

  onSearchClearForVeg() {
    this.searchkeyForVeg = '';
    this.applyFilterForveg();
  }

  applyFilterForveg() {
    this.veg.filter = this.searchkeyForVeg.trim().toLowerCase();
  }

  onSearchClearForNonveg() {
    this.searchkeyForNonveg = '';
    this.applyFilterForNonveg();
  }

  applyFilterForNonveg() {
    this.nonveg.filter = this.searchkeyForNonveg.trim().toLowerCase();
  }

  onAddVeg() {
    this.dbService.initializeFormGroup();
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = false;
    matDialogConfig.width = '70%';
    this.matDialog.open(Category1VegComponent, matDialogConfig);
  }
  onAddNonveg() {
    this.dbService.initializeFormGroup();
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = false;
    matDialogConfig.width = '70%';
    this.matDialog.open(Category1NonvegComponent, matDialogConfig);
  }

  onEditVeg(menuItem) {
    this.dbService.populateItemDetailsForm(menuItem);
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '70%';
    let ref = this.matDialog.open(Category1VegComponent, matDialogConfig);
    ref.componentInstance.onAdd.subscribe(() => {
      this.dbService.deleteCategory1Veg(menuItem)
    });
  }
  onEditNonveg(menuItem) {
    this.dbService.populateItemDetailsForm(menuItem);
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '70%';
    let ref = this.matDialog.open(Category1NonvegComponent, matDialogConfig);
    ref.componentInstance.onAdd.subscribe(() => {
      this.dbService.deleteCategory1Nonveg(menuItem)
    });
  }

  onDeleteVeg(menuItem) {
    if (confirm('Are you sure to delete this record ?')) {
      this.dbService.deleteCategory1Veg(menuItem)
    }
  }
  onDeleteNonveg(menuItem) {
    if (confirm('Are you sure to delete this record ?')) {
      this.dbService.deleteCategory1Nonveg(menuItem)
    }
  }
}
