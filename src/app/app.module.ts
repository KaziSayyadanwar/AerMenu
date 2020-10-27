import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Category1Component } from './category1/category1.component';
import { Category1VegComponent } from './category1-veg/category1-veg.component';
import { Category1NonvegComponent } from './category1-nonveg/category1-nonveg.component';

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
