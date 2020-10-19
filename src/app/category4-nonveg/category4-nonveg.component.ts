import { Component, OnInit, EventEmitter } from '@angular/core';
import { DBService } from '../db.service';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-category4-nonveg',
  templateUrl: './category4-nonveg.component.html',
  styleUrls: ['./category4-nonveg.component.css']
})
export class Category4NonvegComponent implements OnInit {
  onAdd = new EventEmitter();
  selectedImage: any = "../assets/img/No-image-available.png"
  selectedFile: string = "No File Selected"
  itemData: any
  constructor(
    public dbService: DBService,
    public dialogRef: MatDialogRef<Category4NonvegComponent>,
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
      this.dbService.pushCategory4Nonveg(this.dbService.itemDetailsForm.value)
      this.dialogRef.close();
      this.dbService.itemDetailsForm.reset()
    }
  }
}

