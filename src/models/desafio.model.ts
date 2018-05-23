import { Perguntas } from "./perguntas.model";

export class Desafio {
  public nome: string;
  public dicas: string[];
  public dificuldade: number;
  public pontos: number;
  public qtdPessoas: number;
  public latLong: string[];
  public perguntas: Perguntas;
  public video: string;
  public conquista: string;
  public imagem: string;

  constructor(
    nome,
    dicas,
    dificuldade,
    pontos,
    qtdPessoas,
    perguntas,
    video,
    conquista,
    imagem
  ) {
    this.nome = nome;
    this.dicas = dicas;
    this.dificuldade = dificuldade;
    this.pontos = pontos;
    this.qtdPessoas = qtdPessoas;
    this.perguntas = perguntas;
    this.video = video;
    this.conquista = conquista;
    this.imagem = imagem;
  }
}
