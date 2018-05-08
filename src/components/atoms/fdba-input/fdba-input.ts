import { Component, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fdba-input',
  templateUrl: 'fdba-input.html',
  inputs: ['type', 'textLabel'],
  outputs: ['novaConta']
})
export class FdbaInputComponent {
  type: string;
  textLabel: string;

  criarConta: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.criarConta = this.formBuilder.group({
      username: [''],
      email: ['', Validators.email],
      password: ['']
    });
  }
  logForm() {
    console.log(this.criarConta.value)
  }
}
