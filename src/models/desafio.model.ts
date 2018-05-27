import { Perguntas } from "./perguntas.model";

export interface Desafio {
  key?: string;
  myDesafio?: boolean;
  nome: string;
  dicas: string[];
  dificuldade: number;
  pontos: number;
  qtdPessoas: number;
  latLong: string[];
  perguntas: Perguntas;
  video: string;
  conquista: string;
  imagem: string;
}
