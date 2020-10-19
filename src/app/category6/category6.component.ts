import { Component, OnInit, ViewChild } from '@angular/core';
import { DBService } from '../db.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Category6VegComponent } from '../category6-veg/category6-veg.component';
import { Category6NonvegComponent } from '../category6-nonveg/category6-nonveg.component';

@Component({
  selector: 'app-category6',
  templateUrl: './category6.component.html',
  styleUrls: ['./category6.component.css']
})
export class Category6Component implements OnInit {
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
    this.dbService.getCategory6().subscribe((data) => {
      let arrVeg = data["veg"]
      let veg = _.sortBy(arrVeg, "ItemName")
      let arrNonveg = data["nonVeg"]
      let nonveg = _.sortBy(arrNonveg, "ItemName")
      //veg menu
      this.veg = new MatTableDataSource(veg);

      this.veg.paginator = this.paginatorForVeg;
      //nonveg menu
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
    this.matDialog.open(Category6VegComponent, matDialogConfig);
  }
  onAddNonveg() {
    this.dbService.initializeFormGroup();
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = false;
    matDialogConfig.width = '70%';
    this.matDialog.open(Category6NonvegComponent, matDialogConfig);
  }

  onEditVeg(menuItem) {
    this.dbService.populateItemDetailsForm(menuItem);
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '70%';
    let ref = this.matDialog.open(Category6VegComponent, matDialogConfig);
    ref.componentInstance.onAdd.subscribe(() => {
      this.dbService.deleteCategory6Veg(menuItem)
    });
  }
  onEditNonveg(menuItem) {
    this.dbService.populateItemDetailsForm(menuItem);
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '70%';
    let ref = this.matDialog.open(Category6NonvegComponent, matDialogConfig);
    ref.componentInstance.onAdd.subscribe(() => {
      this.dbService.deleteCategory6Nonveg(menuItem)
    });
  }

  onDeleteVeg(menuItem) {
    if (confirm('Are you sure to delete this record ?')) {
      this.dbService.deleteCategory6Veg(menuItem)
    }
  }
  onDeleteNonveg(menuItem) {
    if (confirm('Are you sure to delete this record ?')) {
      this.dbService.deleteCategory6Nonveg(menuItem)
    }
  }
}


