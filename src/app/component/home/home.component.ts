import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stylist1: string = 'assets/images/stylist-1.jpg';
  testimony: string = 'assets/images/testimony-img.png';
  serviceImge1: string = 'assets/images/services-1.jpg';
  serviceImge2: string = 'assets/images/services-2.jpg';
  serviceImge3: string = 'assets/images/services-3.jpg';
  serviceImge4: string = 'assets/images/services-4.jpg';
  about: string = 'assets/images/about.jpg';
  background1: string = 'assets/images/bg.jpg';
  mock1: string = 'assets/images/mock.png';

  opacity: any;

  constructor() { }

  ngOnInit(): void {
  }

}
