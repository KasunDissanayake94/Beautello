import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  background2: string = 'assets/images/bg-2.jpg';
  image_1: string = 'assets/images/image_1.jpg';
  image_2: string = 'assets/images/image_2.jpg';
  image_3: string = 'assets/images/image_3.jpg';
  image_4: string = 'assets/images/image_4.jpg';
  image_5: string = 'assets/images/image_5.jpg';
  image_6: string = 'assets/images/image_6.jpg';
  recentImage: string;
  blog1: string = 'assets/images/Blog/blog1.jpeg';
  blog2: string = 'assets/images/Blog/blog2.jpeg';
  blog3: string = 'assets/images/Blog/blog3.jpeg';
  blog4: string = 'assets/images/Blog/blog4.jpg';

  team2: string = 'assets/images/Blog/team2.jpeg';
  team3: string = 'assets/images/Blog/team3.jpg';
  salon: any;
  salonList: unknown[];
  stylist1: string = 'assets/images/stylist-1.jpg';
  testimony: string = 'assets/images/testimony-img.png';

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.loadSalons();
  }

  private loadSalons() {
    this.firestore.collection('salon', ref => ref.where('adminVerified', '==', true))
      .valueChanges().subscribe(result => {
      this.salonList = result;
    });
  }
}
