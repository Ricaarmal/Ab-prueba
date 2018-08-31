import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  modalRef: BsModalRef;
  user: any;
  auth: any = {};

  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private router: Router
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.user = {};
  }

  login() {
    this.authService.login(this.auth)
    .subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['task']);
    });

  }

}
