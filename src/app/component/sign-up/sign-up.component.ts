import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();
  registerUser = new User();
  users: User[];
  background1 = 'assets/images/bg.jpg';
  opacity: any;

  constructor(private spinner: NgxSpinnerService,
              private router: Router,
              private firestore: AngularFirestore,
              private userService: UserService ,
              private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  getNumber($event: any) {

  }

  signUp() {

  }
}
