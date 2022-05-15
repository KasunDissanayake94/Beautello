import { Component, OnInit } from '@angular/core';
import {Message} from "../../model/Message";
import {ToastrService} from "ngx-toastr";
import {MessageService} from "../../service/message.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  background2: string = 'assets/images/bg-2.jpg';
  message = new Message();

  constructor(private toaster: ToastrService,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.message.name != null && this.message.email != null && this.message.message != null && this.message.subject != null) {
      if (this.emailValidator(this.message.email)) {
        this.messageService.createMessage(this.message).then(r => this.toaster.success('Message Successfully Sent!', 'Kalonish'));

      } else {
        this.toaster.error('Invalid email Address!', 'Kalonish');
      }

    } else {
      this.toaster.error('Please fill all the Fields!', 'Kalonish');
    }
  }

  emailValidator(email: any) {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(email)) {
      return false;
    }
    return true;
  }
}
