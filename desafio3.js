class Personagem {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        let ataque;
        switch (this.classe) {
            case "cachaceiro":
                ataque = "pinga ardente";
                break;
            default:
                ataque = "ataque padrão";
                break;
        }

        const mensagem = `O ${this.nome} (${this.classe}) atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

const Persobebo = new Personagem("Juninho Gameplay", 12, "cachaceiro");
Persobebo.atacar();
