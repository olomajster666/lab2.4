/*
var a=20;
var b=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
let dod=a+b;
let ode=a-b;
let mno=a*b;
let dzi=a/b;
document.getElementById("p1").innerHTML="wynik dodawania to: "+dod;
document.getElementById("p2").innerHTML = ode;
document.getElementById("p3").innerHTML = mno;
document.getElementById("p4").innerHTML = dzi;

*/

/*
var a=5;
var b=10;
var c=13;
var p=(a+b+c)/2;
var area=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(p);
console.log(area);
document.getElementById("p1").innerHTML="pole trojkata o bokach "+a+", "+b+", "+c+" wynosi: "+area;
*/

/*
function gra(){
var a=Math.ceil(Math.random()*11);
while (true){
     var b=prompt("zgadnij liczbe");
    if (a!=b){
        document.getElementById("p1").innerHTML="sproboj ponownie";
    }
    if (a==b){
        document.getElementById("p1").innerHTML="dobra robota";
        break
    }
}
}
*/

/*
var a=prompt("podaj liczbe 1");
var b=prompt("podaj liczbe 2");
var c=prompt("podaj liczbe 3");

if (a>b){
    if(a>c){
        console.log(a)
    }
}
if (b>a){
    if(b>c){
        console.log(b)
    }
}
if (c>a){
    if(c>b){
        console.log(c)
    }
}
*/

/*
a= prompt("podaj liczbe 1: ")
b= prompt("podaj liczbe 2: ")
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
*/


/*
let student1 = { imię: "Adam", nazwisko: "Kowalski", wiek: 21 };
let student2 = { imię: "Ewa", nazwisko: "Nowak", wiek: 20 };
let student3 = { imię: "Jan", nazwisko: "Kowalczyk", wiek: 22 };

student1.numerIndeksu = "12345";
student2.numerIndeksu = "23456";
student3.numerIndeksu = "34567";

console.log(student1.imię);
console.log(student2.nazwisko);
console.log(student3.wiek);
*/

/*
let student ={};

student.imię = prompt("Podaj imię studenta:");
student.nazwisko = prompt("Podaj nazwisko studenta:");
student.wiek = prompt("Podaj wiek studenta:");

document.getElementById("p1").innerHTML="Imię studenta: " + student.imię;
document.getElementById("p2").innerHTML="Nazwisko studenta: " + student.nazwisko;
document.getElementById("p3").innerHTML="Wiek studenta: " + student.wiek;	
*/

function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("p1").innerHTML = time;
}

setInterval(showTime, 1000);