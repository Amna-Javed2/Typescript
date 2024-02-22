var personName = '';
personName = prompt('please enter your name') || '';
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split('').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join('');
if (personName !== null && personName !== '') {
    alert("hello ".concat(personName, ",here are your name in :\nlowercase :").concat(lowercase, " \nuppercase :").concat(uppercase, "\ntitlecase :").concat(titlecase, "\n"));
}
else {
    alert('please enter your name');
}
