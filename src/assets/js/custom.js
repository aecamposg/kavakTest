function problem() {
    const emails = [
        'test.email+alex@kavak.com',
        'test.e.mail+bob.cathy@kavak.com',
        'testemail+david@ka.vak.com',
        'testemail+david+sr@ka.vak.com',
        '',
        null,
        'not an email'
    ];

    const pe = procesarEmails(emails);

    const eu = emailsUnicos(emails);

    $('#result').html('El resultado es: <strong>' + eu + '</strong> - (' + pe + ')');
}


function procesarEmails(emails) {
    const nombreSinPuntos = (nombre) => nombre.replace(/\./g, '');
    const nombreSinMas = (nombre) => {
        const indexOf = nombre.indexOf('+');
        return nombre.substr(0, indexOf);
    };

    return emails.map(e => {
        if (e == null) return null;

        const predicates = e.split('@');
        if (predicates.length !== 2)
            return null;

        const nombre = predicates[0];
        const dominio = predicates[1];
        const nombreProcesado = nombreSinMas(nombreSinPuntos(nombre));

        return `${nombreProcesado}@${dominio}`
    }).filter(e => e != null);
}

function emailsUnicos(emails) {
    return [...new Set(procesarEmails(emails))].length;
}