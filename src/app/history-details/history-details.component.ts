import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DBService } from '../db.service';
import { IpastOrder } from '../ipast-order';
import * as _ from 'lodash';
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import * as firebase from 'firebase';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {
  // orderDetails: IpastOrder[];
  id: number;
  item: IpastOrder;

  constructor(
    private db: DBService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap.get('id');
    this.id = +params;
    this.db.pastOrdersbyId(this.id).subscribe((data) => {
      this.item = data;
    });
  }
  backToPastOrders() {
    return this.router.navigate(['/menu/history']);
  }
  downloadPdf() {
    // let content = document.getElementById('pdf')
    // html2canvas(content).then((canvas) => {
    //   var imgData = canvas.toDataURL('image/png')
    //   var doc = new jspdf.jsPDF()
    //   var imgHieght = canvas.height * 208 / canvas.width;
    //   doc.addImage(imgData, 0, 20, 208, imgHieght)
    //   //  doc.line(160, 0, 160, 300)
    //   doc.save("invoice.pdf")
    // })

    this.db.sendMail()
  }

  uploadImg(event: any) {
    console.log(event)
    const file: File = event.target.files[0]
    const metaData = { "contentType": file.type }
    const storageREf = firebase.storage().ref(`invoices${file.name}`)
    console.log("Uploading..." + " " + file.name)
    const uploadTask: firebase.storage.UploadTask = storageREf.put(file, metaData)

    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      console.log("File loaded")
      console.log(uploadSnapshot.downloadURL)
    })

  }

}

