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

const persone = [];
// let count = 0;
//csv
// let gFs = new GestioneFileSynk("./src/persona - Foglio1.csv");
// let gfsEsporta = new GestioneFileSynk("esporta.csv");

//json
let gFs2 = new GestioneFileSynk("./src/persone.json");
let json = JSON.parse(gFs2.ReadFile());

// console.log(json);

for (let i = 0; i < json.length; i++) {
    var nome = json[i].nome;
    // console.log(nome);
    var cognome = json[i].cognome;
    var data_nascita = json[i].data_nascita;

    var persona = new Persona(nome, cognome, data_nascita);
    persone.push(persona);

}

for (let i = 0; i < persone.length; i++) {
    console.log("Persona"  + (i + 1) + ":\n");
    console.log(persone[i].ToString());
}

let gfsEsporta2 = new GestioneFileSynk("./src/persone1.json");
gfsEsporta2.WriteFile(JSON.stringify(persone, null, 4));

// let data = gFs.ReadFile().split(/\r?\n/);
// data.splice(0, 1);

// //console.log("File content:1", data);
// for (let i = 0; i < data.length; i++) {
//     var riga = data[i].split(",");
//     var persona = new Persona(riga[0], riga[1], riga[2]);
//     persone.push(persona);

// }
// console.log("menu");
// console.log("1)");
// for (let i = 0; i < data.length; i++) {
//     console.log("Persona"  + (i + 1) + ":\n");
//     console.log(persone[i].ToString());
// }
// console.log("2)file esportato");
// gfsEsporta.WriteFile("Nome,Cognome,data_di_nascita");
// for (let i = 0; i < persone.length ;i++){
//     gfsEsporta.WriteFile(persone[i].ToCsv());    
// }

// //occorrenze della parola
// let word = "pollo";
// for(let i = 0; i < data.length; i++){
//     var riga = data[i];
//     var parole = riga.split(",");
//     for(let j = 0; j< parole.length; j++ ){
//         var parola = parole[j];
//         if(parola == word) {
//             count++;
//         }
//     }
// }
// console.log("3)");
// console.log("ci sono " + count +" occorrenze della parola " + word);

//prova