export class Perguntas {
  public perguntas: string[];
  public todasAlternativas;
  public respostas: string[];
  public pontos: number;

  constructor(pergunta, alternativas, resposta, pontos) {
    this.perguntas = pergunta;
    this.todasAlternativas = alternativas;
    this.respostas = resposta;
    this.pontos = pontos;
  }
}
