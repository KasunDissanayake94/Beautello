import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  background2: string = 'assets/images/bg-2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
