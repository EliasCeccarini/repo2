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
}

class Istituzione {
    nome;
    lista_personale;
    constructor(nome, lista_personale) {
        this.nome = nome;
        this.lista_personale = lista_personale;
    }
}

const istituzioni = [];

let gFs = new GestioneFileSynk("./src/istituzioni.json");
let data = JSON.parse(gFs.ReadFile());

for (let i = 0; i < data.length; i++) {
    var nome = data[i].nome;
    var persone = [];
    var lista = data[i].lista_personale;
    for (let j = 0; j < lista.length; j++) {
        var nome_persona = lista[j].nome;
        var cognome_persona = lista[j].cognome;
        var data_nascita_persona = lista[j].data_nascita;

        var persona = new Persona(nome_persona, cognome_persona, data_nascita_persona);
        persone.push(persona);
    }
    var istituzione = new Istituzione(nome, persone);
    istituzioni.push(istituzione);
}

console.log("Il file è importato correttamente");

persone = [];

var persona1 = new Persona("Mario", "Rossi", "11/11/2000")
persone.push(persona1);
var persona2 = new Persona("Giovanni", "Felpa", "12/12/2012")
persone.push(persona2);
var persona3 = new Persona("Alessandro", "Alessandria", "01/09/1999")
persone.push(persona3);

istituzione = new Istituzione("ISISS DE-GASPERI", persone);
istituzioni.push(istituzione);

let gfsEsporta = new GestioneFileSynk("./src/istituzioni1.json");
gfsEsporta.WriteFile(JSON.stringify(istituzioni, null, "\t"));
console.log("File esportato correttamente");
