const prompt = require("prompt-sync")();

class GestioneFileSynk {
    fs = require('fs'); //selezionare libreria

    constructor(nomeFile) {
        this.nomeFile = nomeFile;

    }
    ReadFile() {
        try {
            const data = this.fs.readFileSync(this.nomeFile, "utf8");
            return data;
        } catch (err) {
            console.error(err);
        }
    };
    WriteFile(msg) {
        try {
            this.fs.writeFileSync(this.nomeFile, msg + " \r\n", { flag: 'a+' });
            // file written successfully
        } catch (err) {
            console.error(err);
        }
    };
    AppendFile(msg) {
        ////?????????????????????
    };
}

class Libro {
    m_titolo;
    m_autore;
    m_prezzo;
    constructor(titolo, autore, prezzo) {
        this.m_titolo = titolo;
        this.m_autore = autore;
        this.m_prezzo = prezzo;
    }
}

class Libreria {
    m_nome;
    m_lista_libri;
    constructor(nome, lista_libri) {
        this.m_nome = nome;
        this.m_lista_libri = lista_libri;
    }
}

let gFs = new GestioneFileSynk("./src/Biblioteca.json");
let data = JSON.parse(gFs.ReadFile());

for (let i = 0; i < data.length; i++) {
    var nome = data[i].nome;
    var libri = [];
    var lista = data[i].lista_libri;
    for (let j = 0; j < lista.length; j++) {
        var nome_libro = lista[j].titolo;
        var autore_libro = lista[j].autore;
        var prezzo_libro = lista[j].prezzo;

    }
    var libreria = new libreria(nome, lista_libri);

}