import { Component, EventEmitter } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "fdba-perfil-input",
  templateUrl: "fdba-perfil-input.html",
  inputs: ["email", "username", "name"],
  outputs: ["newPerfil", "logout"]
})
export class FdbaPerfilInputComponent {
  email: string;
  username: string;
  name: string;

  perfil: FormGroup;
  newPerfil = new EventEmitter();
  logout = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {
    this.perfil = this.formBuilder.group({
      email: new FormControl("", {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.email
        ]
      }),
      name: new FormControl("", {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      username: new FormControl("", {
        validators: [Validators.required, Validators.minLength(4)]
      })
    });

    this.perfil.value.email = this.email;
  }

  salvarEmit() {
    this.newPerfil.next(this.perfil.value);
  }

  logoutEmit(click) {
    this.logout.next(click);
  }
}
