import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/User";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isClicked = true;
  collapse = 'collapse navbar-collapse';
  userRegistered = new User();

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {

    this.router.navigate(['signUp']);

  }

  signIn() {

    this.router.navigate(['signIn']);

  }

  logout() {

  }

  menuClick() {

  }
}
