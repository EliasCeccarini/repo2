const prompt = require("prompt-sync")();
const os = require('os');

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

class Persona {
    nome;
    cognome;
    data_nascita;
    constructor(nome, cognome, data_nascita) {
        this.nome = nome;
        this.cognome = cognome;
        this.data_nascita = data_nascita;
    }
    set nome(name) {
        this.nome = name;
    }
    set cognome(surname) {
        this.cognome = surname;
    }
    set data_nascita(date) {
        this.data_nascita = date;
    }
    get nome() {
        return this.nome;
    }
    get cognome() {
        return this.cognome;
    }
    get data_nascita() {
        return this.data_nascita;
    }
    ToString() {
        return "Nome : " + this.nome + "\nCognome : " + this.cognome + "\nData nascita : " + this.data_nascita;
    }
    // ToCsv(){
    //     return this.nome + "," + this.cognome + "," + this.data_nascita;
    // }
}

class Istituzione {
    nome;
    lista_personale;
    constructor(nome, lista_personale) {
        this.nome = nome;
        this.lista_personale = lista_personale;
    }
    
    // ToCsv(){
    //     return this.nome + "," + this.cognome + "," + this.data_nascita;
    // }
}

const persone = [];
const Istituzioni  = [];

let gFs = new GestioneFileSynk("./src/lab025.json");
let json = JSON.parse(gFs.ReadFile());

for (let i = 0; i < json.length; i++) {
    var nome = json[i].nome;
    // console.log(nome);
    var mnome = json[i].nome;
    var lista = json[i].lista_personale;

    var persona = new Persona(nome, cognome, data_nascita);
    persone.push(persona);
    for (let j = 0; j < lista.length; j++) {
        var nome_persona = lista[j];
        var cognome_lista = lista[j];
        var data_di_nascita = lista[j];
        
    }
}
