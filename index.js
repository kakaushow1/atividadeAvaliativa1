class Noticia{
    constructor(titulo,data_de_publicação,resumo,texto){
        this.titulo= titulo;
        this.data_de_publicação=data_de_publicação;
        this.resumo=resumo;
        this.texto=texto;
    }
    mostrarNoticia(){
        return this.titulo + "\n"+ this.data_de_publicação + "\n"+ this.resumo + "\n"+ this.texto;
    }
}
let noticia= new Noticia ("Aprovados na UFPR", "17/02/2024", "Lista de Alunos aprovados", "Ana Flávia Rossetto, Kauani de Paula");
console.log(noticia.mostrarNoticia())