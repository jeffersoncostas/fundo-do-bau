export class Usuario {
    public key?: string;
    public nome: string;
    public username: string;
    public conquistas = [];
    public pontos: number;
    public desafiosEmAndamento = [];
    public latitude: number;
    public longitude: number;
    public desafiosConcluidos = [];
    public adm: boolean;

    constructor(nome, username, conquistas, pontos, desafiosEmAndamento, latitude, longitude, desafiosConcluidos, adm) {

        this.nome = nome;
        this.username = username;
        this.conquistas = conquistas;
        this.pontos = pontos;
        this.desafiosEmAndamento = desafiosEmAndamento;
        this.latitude = latitude;
        this.longitude = longitude;
        this.desafiosConcluidos = desafiosConcluidos;
        this.adm = adm;
    }
}
