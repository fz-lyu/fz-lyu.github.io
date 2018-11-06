var i = 0;
var txt1 = 'I\'m Fanzhe Lyu.';
function typeWriter() {

    if (i < txt1.length) {
        document.getElementById("name").innerHTML = txt1.substr(0, i+1) + '|';
        i++;
        setTimeout(typeWriter, Math.floor(Math.random() * 150) + 30);
    }
}
typeWriter();