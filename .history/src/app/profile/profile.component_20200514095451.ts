import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
    this.cedula = localStorage.getItem('cedula'); 
    this.codId = localStorage.getItem('codigo');
    this.pidm = localStorage.getItem('pidm');

  }

}
