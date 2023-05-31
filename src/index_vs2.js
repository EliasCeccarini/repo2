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

class Persona {
    nome;
    cognome;
    data_nascita;
    constructor(nome, cognome, data_nascita) {
        this.nome = nome;
        this.cognome = cognome;
        this.data_nascita = data_nascita;
    }
    ToString() {
        return `Nome : ${this.nome}\nCognome : ${this.cognome}\nData nascita : ${this.data_nascita}`;
    }
}

const persone = [];

let gFs = new GestioneFileSynk("./src/persone1.json");
let data = JSON.parse(gFs.ReadFile());


for (let i = 0; i < data.length; i++) {
    var riga = Object.values(data[i]);
    var persona = new Persona(riga[0], riga[1], riga[2]);
    persone.push(persona);
}

for (let i = 0; i < persone.length; i++) {
    console.log("Persona " + (i + 1) + ":\n");
    console.log(persone[i].ToString());
}

var persona = new Persona("Fabio", "Ricci", "05/10/1980");
persone.push(persona);

let gfsEsporta = new GestioneFileSynk("./src/persone1.json");
gfsEsporta.WriteFile(JSON.stringify(persone));

let count = 0;
let gFsSearch = new GestioneFileSynk(prompt("File: "));
let word = prompt("Parola da cercare: ");
data = JSON.parse(gFsSearch.ReadFile());

for (let i = 0; i < data.length; i++) {
    var persona = data[i];
    var parole = Object.values(persona);
    for (let j = 0; j < parole.length; j++) {
        var parola = parole[j];
        if (parola == word) {
            count++;
        }
    }
}

console.log(`Ci sono ${count} occorrenze della parola ${word}`);
