
function hello() {
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var number = localStorage.getItem('number');
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var Number = document.getElementById('Number').value;
    localStorage.setItem("name", Name);
    localStorage.setItem("email", Email);
    localStorage.setItem("number", Number);
    console.log(`Name :${Name}`);
    console.log(`Email :${Email}`);
    console.log(`Phone Number :${Number}`);
}
var storage = window.localStorage;
console.log(storage);