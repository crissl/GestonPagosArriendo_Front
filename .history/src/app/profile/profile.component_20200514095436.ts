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
    public codId = localStorage.getItem('codigo');
    public pidm = localStorage.getItem('pidm');

  }

}
