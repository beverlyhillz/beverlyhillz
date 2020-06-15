import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
navItemName=[{id:1,name:'rice'},{id:2,name:'wheat'},{id:3,name:'pulse',{id:4,name:'tea'}];
  constructor() { }

  ngOnInit(): void {
  }

}
