#! /usr/bin/env node

var fs = require('fs');
var path = require('path');

module.exports = function (context) {

    // Percorso completo del file gradle da modificare
    var gradleFile = path.join(context.opts.projectRoot, 'platforms', 'android', 'cordova-plugin-qrscanner', 'pscanner-qrscanner.gradle');
    
    // Stampa il percorso per verificare che sia corretto
    console.log("Percorso file Gradle:", gradleFile);

    // Controlla se il file esiste
    if (fs.existsSync(gradleFile)) {
        
        var fileContent = fs.readFileSync(gradleFile, 'utf-8');

        // Sostituisci "compile" con "implementation"
        var modifiedContent = fileContent.replace(/compile/g, 'implementation');

        // Salva le modifiche nel file
        fs.writeFileSync(gradleFile, modifiedContent, 'utf-8');
        
        // Log di conferma che il file è stato modificato correttamente
        console.log("File Gradle modificato con successo.");
    } else {
        // Se il file non esiste, logga un messaggio di errore
        console.log("File Gradle non trovato:", gradleFile);
    }
};
