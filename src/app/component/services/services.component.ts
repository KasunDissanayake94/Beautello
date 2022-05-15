import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  serviceImge1: string = 'assets/images/services-1.jpg';
  serviceImge2: string = 'assets/images/services-2.jpg';
  serviceImge3: string = 'assets/images/services-3.jpg';
  serviceImge4: string = 'assets/images/services-4.jpg';
  background2: string = 'assets/images/bg-2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
