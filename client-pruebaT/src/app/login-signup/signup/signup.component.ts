import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  modalRef: BsModalRef;
  auth: any = {};
  user: any;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private router: Router
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {}

  signUp() {
    console.log(this.user);
    this.authService.signup(this.auth)
    .subscribe(user => {
      this.user = user;
      alert('Cuenta Creada');
    });
    this.router.navigate(['login']);
  }

}
