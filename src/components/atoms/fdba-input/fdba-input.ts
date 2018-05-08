import { Component, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'fdba-input',
  templateUrl: 'fdba-input.html',
  inputs: ['type', 'textLabel'],
  outputs: ['novaConta', 'login', 'loginPage', 'criarContaPage']
})
export class FdbaInputComponent {
  type: string;
  textLabel: string;

  criarConta: FormGroup;
  senhas: FormGroup;
  loginForm: FormGroup;

  novaConta = new EventEmitter();
  login = new EventEmitter();

  loginPage = new EventEmitter();
  criarContaPage = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.criarConta = this.formBuilder.group({
      username: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
      email: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.email] }),
      senhas: this.formBuilder.group({
        password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
        confirmPassword: new FormControl('', { validators: [Validators.required, Validators.minLength(6),] })
      }, { validator: this.passwordMatchValidator })
    }
    );

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', { validators: [Validators.required, Validators.minLength(4), Validators.email] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] })
    }
    );

  }


  passwordMatchValidator(g: FormGroup) {
    console.log('aaaaaaa');
    return g.get('password').value === g.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  logForm() {
    console.log(this.criarConta.value);
    this.novaConta.next(this.criarConta.value);
  }

  loginEmit() {
    console.log(this.loginForm.value);
    this.login.next(this.loginForm.value);

  }

  logarPageEmit(click) {
    this.loginPage.next(click);
  }
  criarContaPageEmit(click) {
    this.criarContaPage.next(click);
  }
}
