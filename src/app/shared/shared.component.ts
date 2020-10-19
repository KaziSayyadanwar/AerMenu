import { Component, OnInit } from '@angular/core';
declare var $: any;

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
// import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { DBService } from '../db.service';

@Component({
  selector: 'app-shared',

  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent implements OnInit {
  // faCoffee = faCoffee;
  // faUtensils = faUtensils;
  // faBars = faBars;
  // faStar = faStar;
  // faUser = faUser;
  // faArrowRight = faArrowCircleRight;
  // faArrowLeft = faArrowCircleLeft;
  left = true;
  right = false;

  constructor(private auth: DBService) {}
  user: firebase.User;
  ngOnInit() {

    $('#toggle').click(function () {
      var div = $('#theDiv');
      div.animate({ width: '270px' }, '1000');
      $('#toggle').hide(0);
      $('#toggle1').show(0);
    });
    $('#toggle1').click(function () {
      var div = $('#theDiv');
      div.animate({ width: '55px' }, '1000');
      $('#toggle').show(0);
      $('#toggle1').hide(0);
    });

    $('#drop').click(function () {
      $('#menuDiv').toggle(0);
    });
    $('#drop1').hover(function () {
      $('#menu1').toggle(0);
    });
    this.auth.getUserState().subscribe((user) => {
      this.user = user;
    });
  }

  logOut() {
    this.auth.logout();
  }
  onLiveOrderClick() {
    $('#theDiv').hide(0);
  }
  onPastOrderClick() {
    $('#theDiv').hide(0);
  }
  onBreakfastClick() {
    $('#theDiv').hide(0);
  }
  onLunchClick() {
    $('#theDiv').hide(0);
  }
  onDinnerClick() {
    $('#theDiv').hide(0);
  }
  onSnacksClick() {
    $('#theDiv').hide(0);
  }
  onAboutClick() {
    $('#theDiv').hide(0);
  }

  logo() {
    $('#theDiv').hide(0);
  }
}
