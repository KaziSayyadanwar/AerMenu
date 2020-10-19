import { Component, OnInit, EventEmitter } from '@angular/core';
import { DBService } from '../db.service';
import { MatDialogRef } from '@angular/material/dialog';

import {
  MatSnackBar,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-category3-veg',
  templateUrl: './category3-veg.component.html',
  styleUrls: ['./category3-veg.component.css']
})
export class Category3VegComponent implements OnInit {
  onAdd = new EventEmitter();
  selectedImage: any = "../assets/img/No-image-available.png"
  selectedFile: string = "No File Selected"
  itemData: any
  constructor(
    public dbService: DBService,
    public dialogRef: MatDialogRef<Category3VegComponent>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

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
      this.dbService.pushCategory3Veg(this.dbService.itemDetailsForm.value)
      this.dialogRef.close();
      this.dbService.itemDetailsForm.reset()
    }
  }
}
