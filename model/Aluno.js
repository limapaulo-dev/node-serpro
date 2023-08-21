class Aluno {

    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }
    setNome(nome) {
        this.#nome = nome
    }
    getNome(){
        return this.#nome
    }
    setNome(idade) {
        this.#idade = idade
    }
    getNome(){
        return this.#idade
    }
}