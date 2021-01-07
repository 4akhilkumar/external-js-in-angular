import { Component, OnInit } from '@angular/core';

declare const validateform: any;

@Component({
  selector: 'app-js-validation-form',
  templateUrl: './js-validation-form.component.html',
  styleUrls: ['./js-validation-form.component.css']
})
export class JsValidationFormComponent implements OnInit {

  validate() {
    validateform();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
