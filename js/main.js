const name = prompt("Inserisci qui il nome")
console.log('Il tuo nome è ' + name);
document.getElementById('name').innerHTML = name;

const surname = prompt("Inserisci qui il cognome")
console.log('Il tuo cognome è ' + surname);
document.getElementById('surname').innerHTML = surname;

const favColor = prompt("Inserisci qui il tuo colore preferito")
console.log('Il tuo colore preferito è ' + favColor);
document.getElementById('favColor').innerHTML = favColor;

let pwSuggest = name + surname + favColor + '21';
console.log('Questa è la password suggerita ' + pwSuggest);
document.getElementById('pwSuggest').innerHTML = pwSuggest;