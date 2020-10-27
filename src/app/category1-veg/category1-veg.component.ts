import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { DBService } from '../db.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import {
  MatSnackBar,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-category1-veg',
  templateUrl: './category1-veg.component.html',
  styleUrls: ['./category1-veg.component.css'],
})
export class Category1VegComponent implements OnInit {
  onAdd = new EventEmitter();
  selectedImage: any = "../assets/img/No-image-available.png"
  selectedFile: string = "No File Selected"
  itemData: any;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
    public dbService: DBService,
    public dialogRef: MatDialogRef<Category1VegComponent>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  onClose() {
    this.dialogRef.close();
    this.dbService.itemDetailsForm.reset()
  }
  onCancel() {
    this.dialogRef.close();
    this.dbService.itemDetailsForm.reset()
  }
  onSubmit() {
    if (this.dbService.itemDetailsForm.valid) {
      this.onAdd.emit("some");
      this.dbService.pushCategoryVeg(this.data,this.dbService.itemDetailsForm.value)
      this.dialogRef.close();
      this.dbService.itemDetailsForm.reset()
    }
  }
}
