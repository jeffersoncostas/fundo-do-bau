export class Perguntas{

    public pergunta:string;
    public alternativas=[];
    public resposta:string;
    public pontos:number;

    constructor(pergunta,alternativas,resposta,pontos){
        
        this.pergunta=pergunta;
        this.alternativas=alternativas;
        this.resposta=resposta;
        this.pontos=pontos;
        }
}