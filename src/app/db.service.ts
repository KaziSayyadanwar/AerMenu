import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { IpastOrder } from './ipast-order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  userCred: any;
  token: any;
  private authError = new BehaviorSubject<string>('');
  eventAuthError$ = this.authError.asObservable();
  pastOrders: any;
  order: any;
  mail = "http://localhost:3000/sendMail"


  constructor(private firebase: AngularFireDatabase,
    private afs: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router,
    private http: HttpClient) {
  }

  sendMail() {
    let doc = { invoice: "https://firebasestorage.googleapis.com/v0/b/aermenu.appspot.com/o/categoryImages%2F1111.png?alt=media&token=455638eb-2231-4fdf-9784-bbcf50134ac5", to: "anwar.kazi.ak@gmail.com" }
    return this.http.post(this.mail, doc)
  }

  //LoginForm============================================================================================
  loginForm = new FormGroup({
    emailId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    remember: new FormControl(),
  });

  //FormDetails=========================================================================================
  itemDetailsForm = new FormGroup({
    ItemName: new FormControl('', [Validators.required]),
    ItemId: new FormControl(''),
    ImageUrl: new FormControl(''),
    ItemSize: new FormControl([]),
    ItemDescription: new FormControl(''),
    ItemPrice: new FormControl(Number, [Validators.required]),
    ItemPrepTime: new FormControl(Number, [Validators.required]),
    ItemSpecial: new FormControl(Boolean),
    IsSpicy: new FormControl(Boolean),
    ItemRatings: new FormControl(''),
    isAvailable: new FormControl(Boolean),
  });

  //EditFormPopUp=========================================================================================
  populateItemDetailsForm(menuItem) {
    this.itemDetailsForm.setValue({
      ItemId: menuItem.ItemId,
      ItemName: menuItem.ItemName,
      ItemPrice: menuItem.ItemPrice,
      ItemDescription: menuItem.ItemDescription,
      ItemPrepTime: menuItem.ItemPrepTime,
      ItemSpecial: menuItem.ItemSpecial,
      IsSpicy: menuItem.IsSpicy,
      ItemRatings: menuItem.ItemRatings,
      ImageUrl: menuItem.ImageUrl,
      isAvailable: menuItem.isAvailable,
      ItemSize: menuItem.ItemSize
    });
  }
  //Initialize Form==================================================================================================
  initializeFormGroup() {
    this.itemDetailsForm.setValue({
      ItemId: '',
      ItemName: '',
      ItemPrice: null,
      ItemDescription: '',
      ItemPrepTime: null,
      ItemSpecial: true,
      IsSpicy: true,
      ItemRatings: null,
      ImageUrl: '',
      isAvailable: true,
      ItemSize: []
    });

  }

  //GetData==========================================================================================================
  getCategory1() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category1").doc('menuItems')
      .valueChanges());
  }
  getCategory2() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category2").doc('menuItems')
      .valueChanges());
  }
  getCategory3() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category3").doc('menuItems')
      .valueChanges());
  }
  getCategory4() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category4").doc('menuItems')
      .valueChanges());
  }
  getCategory5() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category5").doc('menuItems')
      .valueChanges());
  }
  getCategory6() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category6").doc('menuItems')
      .valueChanges());
  }
  getCategory7() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category7").doc('menuItems')
      .valueChanges());
  }
  getCategory8() {
    return (this.afs
      .collection('BBR')
      .doc('menu').collection("category8").doc('menuItems')
      .valueChanges());
  }

  getNotification() {
    return (this.afs
      .collection('notification')
      .doc('notification')
      .valueChanges());
  }
  removeNotification(notification) {
    this.afs
      .collection('notification')
      .doc('notification')
      .update({
        'orders': firebase.firestore.FieldValue.arrayRemove(notification),
      })
  }
  clearAllNotifications() {
    this.afs.collection('notification').doc('notification').update({ orders: [] })

  }
  getPastOrders() {
    return (this.afs
      .collection('pastorders')
      .doc('pastorders')
      .valueChanges());
  }

  //for past order display============================================================================================
  getPastOrder(): Observable<IpastOrder[]> {
    return (this.afs
      .collection('pastorders')
      .doc<IpastOrder[]>('pastorders')
      .valueChanges());
  }

  //Orders by ID=========================================================================================================
  pastOrdersbyId(id: number): Observable<IpastOrder> {
    return this.getPastOrder().pipe(
      map((items) => items["details"].find((item) => item.orderID === id))
    );
  }


  //Category1 create and delete operations================================================================================
  pushCategory1Veg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category1").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory1Veg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category1").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory1Nonveg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category1").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory1Nonveg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category1").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  //Category2 create and delete operations================================================================================
  pushCategory2Veg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category2").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory2Veg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category2").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory2Nonveg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category2").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory2Nonveg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category2").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  //Category3 create and delete operations================================================================================
  pushCategory3Veg(veg) {
    this.afs
      .collection('BBR')
      .doc('menu').collection("category3").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory3Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category3").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory3Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category3").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory3Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category3").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  //Category4 create and delete operations================================================================================
  pushCategory4Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category4").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory4Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category4").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory4Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category4").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory4Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category4").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  //Category5 create and delete operations================================================================================
  pushCategory5Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category5").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory5Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category5").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory5Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category5").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory5Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category5").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  //Category1 create and delete operations================================================================================
  pushCategory6Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category6").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory6Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category6").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory6Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category6").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory6Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category6").doc('menuItems')
      .update({
        'nonVeg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  //Category7 create and delete operations================================================================================
  pushCategory7Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category7").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory7Veg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category7").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory7Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category7").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory7Nonveg(veg) {
    this.afs
    .collection('BBR')
    .doc('menu').collection("category7").doc('menuItems')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  //Category8 create and delete operations================================================================================
  pushCategory8Veg(veg) {
    this.afs
      .collection('menu')
      .doc('GrillSandwich')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory8Veg(veg) {
    this.afs
      .collection('menu')
      .doc('GrillSandwich')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }
  pushCategory8Nonveg(veg) {
    this.afs
      .collection('menu')
      .doc('GrillSandwich')
      .update({
        'veg': firebase.firestore.FieldValue.arrayUnion(veg),
      })
  }
  deleteCategory8Nonveg(veg) {
    this.afs
      .collection('menu')
      .doc('GrillSandwich')
      .update({
        'veg': firebase.firestore.FieldValue.arrayRemove(veg),
      })
  }

  // n===============================================================================================
  table1Btn() {
    this.afs.collection('orders').doc('table1').update({ isComplete: true })
  }
  table2Btn() {
    this.afs.collection('orders').doc('table2').update({ isComplete: true })
  }
  table3Btn() {
    this.afs.collection('orders').doc('table3').update({ isComplete: true })
  }
  table4Btn() {
    this.afs.collection('orders').doc('table4').update({ isComplete: true })
  }
  table5Btn() {
    this.afs.collection('orders').doc('table5').update({ isComplete: true })
  }
  table6Btn() {
    this.afs.collection('orders').doc('table6').update({ isComplete: true })
  }

  //Live Orders on Table==============================================================================================
  getTakeAwayItems() {
    return (this.afs
      .collection('orders')
      .doc('takeaway')
      .valueChanges());
  }
  getTable1Items() {
    return (this.afs
      .collection('orders')
      .doc('table1')
      .valueChanges())
  }
  getTable2Items() {
    return (this.afs
      .collection('orders')
      .doc('table2')
      .valueChanges());
  }
  getTable3Items() {
    return (this.afs
      .collection('orders')
      .doc('table3')
      .valueChanges());
  }
  getTable4Items() {
    return (this.afs
      .collection('orders')
      .doc('table4')
      .valueChanges());
  }
  getTable5Items() {
    return (this.afs
      .collection('orders')
      .doc('table5')
      .valueChanges());
  }
  getTable6Items() {
    return (this.afs
      .collection('orders')
      .doc('table6')
      .valueChanges());
  }

  //Clear Table Content=======================================================================================================
  clearTable1() {
    let doc = {
      orderID: null,
      timeStamp: "",
      totalAmount: null,
      isComplete: false,
      userEmail: "",
      userPhone: null,
      orders: []
    }
    this.afs.collection('orders').doc('table1').update(doc)
  }
  clearTable2() {
    let doc = {
      orderID: null,
      timeStamp: "",
      totalAmount: null,
      isComplete: false,
      userEmail: "",
      userPhone: null,
      orders: []
    }
    this.afs.collection('orders').doc('table2').update(doc

    )
  }
  clearTable3() {
    let doc = {
      orderID: null,
      timeStamp: "",
      totalAmount: null,
      isComplete: false,
      userEmail: "",
      userPhone: null,
      orders: []
    }
    this.afs.collection('orders').doc('table3').update(doc

    )
  }
  clearTable4() {
    let doc = {
      orderID: null,
      timeStamp: "",
      totalAmount: null,
      isComplete: false,
      userEmail: "",
      userPhone: null,
      orders: []
    }
    this.afs.collection('orders').doc('table4').update(doc

    )
  }
  clearTable5() {
    let doc = {
      orderID: null,
      timeStamp: "",
      totalAmount: null,
      isComplete: false,
      userEmail: "",
      userPhone: null,
      orders: []
    }
    this.afs.collection('orders').doc('table5').update(doc

    )
  }
  clearTable6() {
    let doc = {
      orderID: null,
      timeStamp: "",
      totalAmount: null,
      isComplete: false,
      userEmail: "",
      userPhone: null,
      orders: []
    }
    this.afs.collection('orders').doc('table6').update(doc

    )
  }
  clearTakeaway(order) {
    return (this.afs
      .collection('orders')
      .doc('takeaway')
      .update({
        'takeAway': firebase.firestore.FieldValue.arrayRemove(order),
      }))
  }

  //Save Data to Past Orders====================================================================================================
  pushPastOrder(content) {
    return (this.afs
      .collection('pastorders')
      .doc('pastorders')
      .update({
        'details': firebase.firestore.FieldValue.arrayUnion(content),
      }))
  }

  //=====================================================================================================
  completeOrder(order) {
    this.pastOrders.push({
      orderID: order.$key,
      itemName: order.itemName,
      itemPrice: order.itemPrice,
      timeStamp: order.timeStamp,
    });

    this.order.remove(order.$key);
  }








  //UserInformation=================================================================================================
  getUserState() {
    return this.auth.authState;
  }

  login(email: string, password: string) {
    this.auth.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.authError.next(error);
      })
      .then((userCredential) => {
        if (userCredential) {
          this.router.navigate(['/menu']);
          this.loginForm.reset();
        } else {
          alert('Please enter correct credentials');
        }
      });
  }

  isLoggedIn() {
    this.userCred = this.auth.auth.currentUser;
    this.token = localStorage.getItem(
      'firebase:host:hungryfox-fba07.firebaseio.com'
    );

    if (this.userCred) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.router.navigate(['']);
    return this.auth.auth.signOut();
  }

}
