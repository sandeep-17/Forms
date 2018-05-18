import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  defaultQuestion = 'school';
  answer = '';
  genders = ['male', 'female'];
  @ViewChild('f') ngForm: NgForm;

  user = {
    username: '',
    email: '',
    secreatQuestion: '',
    question: '',
    gender: ''
  };

  hasFormSubmitted = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    this.user.username = this.ngForm.value.username;
    this.user.email = this.ngForm.value.email;
    this.user.secreatQuestion = this.ngForm.value.secreatQuestion;
    this.user.question = this.ngForm.value.question;
    this.user.gender = this.ngForm.value.gender;
    this.hasFormSubmitted = true;
  }
}
