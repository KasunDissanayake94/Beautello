import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  background2: string = 'assets/images/bg-2.jpg'
  about: string = 'assets/images/about.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
