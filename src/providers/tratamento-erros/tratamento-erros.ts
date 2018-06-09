import { Injectable } from "@angular/core";

@Injectable()
export class TratamentoErrosProvider {
  constructor() {}

  tratarErros(erro) {
    switch (erro) {
      case "auth/invalid-email":
        return "E-mail inválido";

      case "auth/requires-recent-login":
        return "Você precisa fazer o login novamente";

      case "auth/user-not-found":
        return "Usuário ou senha inválidos";

      case "auth/wrong-password":
        return "Usuário ou senha inválidos";

      case "auth/email-already-in-use":
        return "E-mail já está em uso";
    }
  }
}
