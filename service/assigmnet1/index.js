window.alert("You can get the data both console and html page")
console.log("Examples of Operators in JavaScript");
console.log("_____________________________")
console.log("Arithmetic operators(+ - * / %)")
console.log("1: Addition");
// addition
console.log("5+4 =",5+4);
// subtruction
console.log("2: Subtraction");
console.log("8-4 =",8-4);
// multiplication
console.log("3: Multiplication");
console.log("5*5 =",5*5);
// divition
console.log("4: Divition");
console.log("20/5 =",20/5);
// modulas
console.log("5: Module");
console.log("30/4 =",30%4);
console.log("______________________")

// assignment operators
console.log("Assigmnent operators");
let x = 2;
x +=3;
console.log(x); // output: 5
let y = 6
y -=1;
console.log(y); // output : 5
let z = 5;
z *= 2;
console.log(z);  // output: 10

console.log("_____________________________");
// logical operators

console.log("Logical operators");
// and operator &&
console.log("and operator(&&)");
console.log("5<10 && 5>2",5<10 && 5>2);
// or oprator ||
console.log("Or operators(||)")
console.log("10<10 || 5>6",10<10 || 5>6);
console.log();
// not operator
console.log("Not operator !");
console.log("!5>2",!5>2);
console.log("_____________________________");

// Relational operators
// equal(==)
console.log("Relational operators");
console.log("Equal ==");
console.log("4==4",4==4);
// not equal(!=)
console.log("Not equal !=");
console.log("4!=4",4!=4);
// Greater than(>)
console.log("Greater than >");
console.log("5>6",5>6);
// less than(<)
console.log("Less than <");
console.log("8<7",8<7);
// Greater than or equal(>=)
console.log("Greater than or equal >=");
console.log("2>=2 ",2>=2);
// less than or equal(<=)
console.log("Less than or equal >=");
console.log("2<=2",2<=2);
// strict equal(===)
console.log("Strict equal ===");
console.log('3===3',3==="3");

// Strict not equal(!==)
console.log("Strict not equal !==");
console.log("3!==3",3!=="3");



document.write("<body style=font-family:poppins;background:#f4f4f4;></body>");
document.write("<h1 style=font-family:poppins;text-align:center;font-size:46px>Operators in JavaScript</h1><hr>");
document.write("<h2 style=padding-left:20px;>Types:</h2>")
document.write("<ul style=font-size:20px;color:brown><li>Arithmetic operators</li><li>Logical operators</li><li>Relational operators</li><ul>");
document.write("<hr>");
document.write("<h3>Arithmetic operators</h3>");
document.write("1: Addition(+)<br>","5+4 =",5+4,"<br>");
document.write();
document.write("2: Subtraction(-)<br>","8-4 =",8-4,"<br>");
document.write("3: Multiplication(*)<br>","5*5 =",5*5,"<br>");
document.write();
document.write("4: Divition(/)<br>","20/5 =",20/5,"<br>");
document.write("5: Module(%)<br>","30/4 =",30%4);
document.write("<hr>")
document.write("<h3>Logical operators</h3>");
document.write("and operator(&&)<br>");
document.write("5<10 && 5>2 ",5<10 && 5>2,"<br><br>");
document.write("Or operators(||)<br>");
document.write("10<10 || 5>6",10<10 || 5>6,"<br><br>");
document.write("Not operator !<br>");
document.write("!(5>2)",!(5>2));
document.write("<hr>");
document.write("<h2>Relational operators</h2>");
document.write("Equal ==<br>");
document.write("4==4 ",4==4,"<br><br>");
document.write("Not equal !=<br>");
document.write("4!=4 ",4!=4,"<br><br>");
document.write("Greater than ><br>");
document.write("5>6 ",5>6,"<br><br>");
document.write("Less than(<)<br>");
document.write("8<7 ",8<7,"<br><br>");
document.write("Greater than or equal >=<br>");
document.write("2>=2 ",2>=2,"<br><br>");
document.write("Less than or equal (>=)<br>");
document.write("2<=2 ",2<=2,"<br><br>");
document.write("Strict equal ===<br>");
document.write('3==="3" ',3==="3","<br><br>");
document.write("Strict not equal !==<br>");
document.write("3!=='3' ",3!=="3");
