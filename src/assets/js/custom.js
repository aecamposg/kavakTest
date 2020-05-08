function problem() {
    let array = [2, 5, 7, 9, 11];
    let sum = 9;
    let result = '<ul>';

    for (let i of array) {
        for (let j of array) {
            if (i + j == sum) {
                result += '<li>Los números "' + i + '" y "' + j + '" suman "' + sum + '".</li>'
            }
        }
    }

    $('#result').html('El resultado es: ' + result + '</ul>');
}