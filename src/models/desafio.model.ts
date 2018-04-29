export class Desafio {
    public nome:string;
    public dicas=[];
    public dificuldade:number;
    public pontos: number;
    public qtdPessoas:number;
    public latitude: number;
    public longitude: number;
    public perguntas=[];
    public video: string;
    public conquista: object;
    public imagem: string;

    constructor(nome,dicas,dificuldade,pontos,qtdPessoas,latitude,longitude,perguntas,video,conquista,imagem){
        this.nome=nome;
        this.dicas=dicas;
        this.dificuldade=dificuldade;
        this.pontos=pontos;
        this.qtdPessoas=qtdPessoas;
        this.latitude=latitude;
        this.longitude=longitude;
        this.perguntas=perguntas;
        this.video=video;
        this.conquista=conquista;
        this.imagem=imagem;
    }
}
