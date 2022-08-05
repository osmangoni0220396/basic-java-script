// // ParseInt And ParseFloat
// // Duita string jog korle majhkhane kono gap thake na. Gap dite chaile qutation er moddhe white space (" ") babohar korte hoy.
var firstName = "Tipu";
var lastName = "Sultan";
var fullName = firstName + " " + lastName;
// console.log(fullName)
// // Qutation er vitor number likhleo seta string hisebe kaj kore.
var number = "31";
var weight = "35 amar ojon 35 kg";
var number1 = parseInt(number);
var weight1 = parseInt (weight)
console.log(number, weight)
console.log(number1)
console.log(weight1)
// // parseInt diye string e jodi number thake tahole setake number e convert kora jay kintu ekhetre number prothome thakte hobe.
// // parseInt babohar korle decimal songha ase na sekhetre parseFloat babohar korte hobe. 
var gpa = "3.93";
var gpaInt = parseInt(gpa);
var gpaFloat = parseFloat (gpa);
var happy = false; 
var counting;
var none = 10;
none = !null;
console.log(gpaInt)
console.log(gpaFloat)
// // Variable kondhoroner seta janar jonno typeof babohar korte hoy.
console.log(typeof gpa)
console.log(typeof gpaInt)
console.log(typeof counting)
console.log(typeof none)
// 0.1 and 0.2 er jogfal 0.30000004 ase. 
// dosomik er por nirdisto ghor porjonto rakhte hole toFixed() babohar korte hoy. Ekhetre number ti string e rupantor hoy.
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
console.log(typeof sum);
sum = parseFloat(sum);
console.log(typeof sum);
console.log(sum)