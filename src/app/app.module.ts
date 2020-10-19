import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Category1Component } from './category1/category1.component';
import { Category1VegComponent } from './category1-veg/category1-veg.component';
import { Category1NonvegComponent } from './category1-nonveg/category1-nonveg.component';
import { Category2Component } from './category2/category2.component';
import { Category2VegComponent } from './category2-veg/category2-veg.component';
import { Category2NonvegComponent } from './category2-nonveg/category2-nonveg.component';
import { Category3Component } from './category3/category3.component';
import { Category3VegComponent } from './category3-veg/category3-veg.component';
import { Category3NonvegComponent } from './category3-nonveg/category3-nonveg.component';
import { Category4Component } from './category4/category4.component';
import { Category4VegComponent } from './category4-veg/category4-veg.component';
import { Category4NonvegComponent } from './category4-nonveg/category4-nonveg.component';
import { Category5Component } from './category5/category5.component';
import { Category5VegComponent } from './category5-veg/category5-veg.component';
import { Category5NonvegComponent } from './category5-nonveg/category5-nonveg.component';
import { Category6Component } from './category6/category6.component';
import { Category6VegComponent } from './category6-veg/category6-veg.component';
import { Category6NonvegComponent } from './category6-nonveg/category6-nonveg.component';
import { Category7Component } from './category7/category7.component';
import { Category7VegComponent } from './category7-veg/category7-veg.component';
import { Category7NonvegComponent } from './category7-nonveg/category7-nonveg.component';
import { Category8Component } from './category8/category8.component';
import { Category8VegComponent } from './category8-veg/category8-veg.component';
import { Category8NonvegComponent } from './category8-nonveg/category8-nonveg.component';
import { SharedComponent } from './shared/shared.component';
import { HistoryComponent } from './history/history.component';
import { LiveComponent } from './live/live.component';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { GuardGuard } from './guard.guard';
import { DBService } from './db.service';

import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { LoginComponent } from './login/login.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common/';
import { RedirectComponent } from './redirect/redirect.component'


@NgModule({
  declarations: [
    AppComponent,
    Category1Component,
    Category1VegComponent,
    Category1NonvegComponent,
    Category2Component,
    Category2VegComponent,
    Category2NonvegComponent,
    Category3Component,
    Category3VegComponent,
    Category3NonvegComponent,
    Category4Component,
    Category4VegComponent,
    Category4NonvegComponent,
    Category5Component,
    Category5VegComponent,
    Category5NonvegComponent,
    Category6Component,
    Category6VegComponent,
    Category6NonvegComponent,
    Category7Component,
    Category7VegComponent,
    Category7NonvegComponent,
    Category8Component,
    Category8VegComponent,
    Category8NonvegComponent,
    SharedComponent,
    HistoryComponent,
    LiveComponent,
    LoginComponent,
    HistoryDetailsComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularMaterialsModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpClientModule

  ],
  providers: [AngularFirestore, AngularFireStorage, GuardGuard, DBService,DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [Category1VegComponent]
})
export class AppModule { }
