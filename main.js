function chapterOne(){
    document.getElementById("ch1output").style.display="inline";
    console.log("hello world");
    console.log("Welcome to javascript");
    console.log("It's powerfull programming language");

    
    document.getElementById("ch1output").innerHTML=`hello world<br>
    Welcome to javascript<br>
    It's a powerfull programming language`;
 
}

function chapterTwo(){
    document.getElementById("ch2output").style.display="inline";
    // declare a variable using let key word
    // console display
    let age = 30;
    // var keyword
    var price = 19.99;
    console.log(age);
    console.log(price);
    
    let name = 'Mohamud'
    // auto declare
    message = 'hello, world';
    console.log(name,message);

    let isVisible = true;
    let isLoggedIn = false;
    console.log(isVisible);
    console.log(isLoggedIn);

    let undefinedVar;
    let emptyValue = null;
    console.log(undefinedVar);
    console.log(emptyValue);
    
    
    document.getElementById("ch2output").innerHTML=`${age}<br>
    ${price}<br><br>
    ${name,message}<br><br>
    ${isVisible}<br>
    ${isLoggedIn}<br><br>
    ${undefinedVar}<br>
    ${emptyValue}`;
    
 
}

function chapterTwoArith(){
    document.getElementById("ch2-p2-output").style.display="inline"
    // Addition
    let sum = 5 + 3;
    console.log(sum);

    // Subtraction
    let sub = 24 - 10;
    console.log(sub);

    // Multiplication
    let mult= 2 * 9;
    console.log(mult)

    // divition
    let div = 50 / 2;
    console.log(div)

    // Exponentiation
    let exp = 10 ** 2;
    console.log(exp);

    // Modulus(Reminder)
    var reminder = 10 % 5;
    console.log(reminder);

    // Increment
    let x = 5;
    let y = x++;
    console.log(x);
    console.log(y);

    // Decrement
    let m = 8;
    let h = m--;
    console.log(m);
    console.log(h);


    
    document.getElementById("ch2-p2-output").innerHTML=`
    ${sum}<br><br><br><br>
    ${sub}<br><br><br>
    ${mult}<br><br><br><br>
    ${div}<br><br><br><br>
    ${exp}<br><br><br>
    ${reminder}<br><br><br>
    ${x}<br>
    ${y}<br><br><br><br>
    ${m}<br>
    ${h}`
}

function chapterTwoComp(){
    document.getElementById("ch2-p3-output").style.display="inline";
    // equal to
    let isEqual = 2 == 3;
    console.log(isEqual);

    // not equal
    var isNotEqual = 4 != 4;
    console.log(isNotEqual)

    // equal value and equal type
    console.log(4 === 3);

    // not equal value or not equal type
    console.log(4 !== 3);

    // less than
    let isLessThan = 2 <5;
    console.log(isLessThan);

    // greater than
    let isGreaterThan = 7>2
    console.log(isGreaterThan)

    // less than or equal
    x = 10 <= 10;
    console.log(x);

    // greater than or equal
    y = 5 >= 10;
    console.log(y)

    // ternary operator
    var ternary = 4>5?"It's true":"It's false";
    console.log(ternary);

    
    document.getElementById("ch2-p3-output").innerHTML=`
    ${isEqual}<br><br><br><br>
    ${isNotEqual}<br><br><br>
    ${4===3}<br><br><br>
    ${4 !==3}<br><br><br>
    ${isLessThan}<br><br><br>
    ${isGreaterThan}<br><br><br>
    ${x}<br><br><br>
    ${y}<br><br><br><br>
    ${ternary}`
}

function chapterTwoLog(){
    document.getElementById("ch2-p4-output").style.display="inline";
    // logical and
    let isEqual = 2==3 && 4==4;
    console.log(isEqual);

    // logical or
    logicOr = 2==3 || 4==4;
    console.log(logicOr);

    // logical not
    let isTrue = !true;
    console.log(isTrue)
    // display html page
    

    document.getElementById("ch2-p4-output").innerHTML=`
    ${isEqual}<br><br><br>
    ${logicOr}<br><br><br><br>
    ${isTrue}`

}

function chapterTwoAss(){
    document.getElementById("ch2-p5-output").style.display="inline";
    let count = 10
    count = 5;
    console.log(count)

    let price = 10;
    price += 5;
    console.log(price)

    let salary = 10;
    salary -= 5;
    console.log(salary)

    let discount = 10;
    discount *=5;
    console.log(discount)

    let average = 10;
    average /=5;
    console.log(average)

    let reminder = 10;
    reminder %=5;
    console.log(reminder)

    let square = 2;
    square **=5;
    console.log(square);

   

    document.getElementById("ch2-p5-output").innerHTML=`
    ${count}<br><br><br><br>
    ${price}<br><br><br>
    ${salary}<br><br><br><br>
    ${discount}<br><br><br>
    ${average}<br><br><br><br>
    ${reminder}<br><br><br>
    ${square}<br><br><br>`
}

function chapterTwoTyopeOperator(){
    document.getElementById("ch2-p6-output").style.display="inline";
    num = console.log(typeof 4.5);
    string = console.log(typeof 'Mohamud');
    number = console.log(typeof NaN);
    boolean = console.log(typeof false)
    object = console.log(typeof [1,2,3,4]);
    obje = console.log(typeof {name:'Mohamud',age:34})
    ob = console.log(typeof new Date())
    func = console.log(typeof function(){})
    undefi = console.log(typeof myCar);
    obj = console.log(typeof null);

    
    document.getElementById("ch2-p6-output").innerHTML=`
    number<br>
    string<br>
    number<br>
    boolean<br>
    object<br>
    object<br>
    function<br>
    undefined<br>
    object`

}

function chapterTwoAutoTypeConversion(){
    document.getElementById("ch2-p7-output").style.display="inline";
    // implicity converts age to a string
    let age = 25;
    let message = "I am " + age + " years old."; 
    console.log(message);



    // Numeric Operations implicit conversion
    let numStr = "42";
    let result = numStr * 2;
    // Implicitly converts numStr to a number: result is 84
    console.log(result)

    //Comparison Operators implicit conversion
    let num = 10;
    let strNum = "5";
    // Implicitly converts strNum to a number for comparison
    console.log(num > strNum);

    // display in html
    
    document.getElementById("ch2-p7-output").innerHTML=`
    ${message}<br><br><br><br><br><br>
    ${result}<br><br><br><br><br><br><br>
    ${num > strNum}<br><br>`
}

function chapterThree(){
    document.getElementById("ch3output").style.display="inline";
    const age = 18;
    const message = `My age is ${age} years
    I live in Mogadishu`;
    console.log(message);
    
    document.getElementById("ch3output").innerHTML=`
    ${message}`;
}

function chapterThreeVarS(){
    document.getElementById("ch3-p2-output").style.display="inline";
    let a = 5;
    let b = 10;
    let temp = a;
    a = b;
    b = temp;
    console.log(`after swapping
    a = ${a}b = ${b}`);
    

    document.getElementById("ch3-p2-output").innerHTML=`
    after swapping <br>
    a = ${a}<br> b = ${b}
    `
}

function chapterThreeVarSwA(){
    document.getElementById("ch3-p3-output").style.display="inline";
    let a = 5;
    let b = 10;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`after swapping: a = ${a}, b = ${b}`);
    
    document.getElementById("ch3-p3-output").innerHTML=`
    after swapping <br>
    a = ${a}<br> b = ${b}`

}

function chapterThreeCondIf(){
    document.getElementById("ch3-p4-output").style.display="inline";
    let age = 18;
    if (age >= 18) {
        console.log("You are an adult");
        document.getElementById("ch3-p4-output").innerHTML=`You are an adult`;
    }
    else{
        console.log("You are a minor");
        document.getElementById("ch3-p4-output").innerHTML=`You are a minor`;
    }

    
}

function chapterThreeNestedIf(){
    let grade = 85;
    document.getElementById("ch3-p5-output").style.display="inline";
    if (grade >=90) {
        console.log("A");
        document.getElementById("ch3-p5-output").innerHTML=`A`;
    }
    else if (grade >=80){
        console.log("B");
        document.getElementById("ch3-p5-output").innerHTML=`B`;
    }
    else {
        console.log("C");
        document.getElementById("ch3-p5-output").innerHTML=`C`;
    }
}

function chapterThreeSwitch(){
    let day = "Saturday";
    document.getElementById("ch3-p6-output").style.display="inline";
    switch (day) {
        case "Saturday":
            console.log("It's the start of the week.");
            document.getElementById("ch3-p6-output").innerHTML=`It's the start of the week.`;

            break;
        case "Wedneday":
            console.log("It's almost the weekend!");
            document.getElementById("ch3-p6-output").innerHTML=`It's almost the weekend!`;
            break;
        default:
            console.log("It's a regular day.");
            document.getElementById("ch3-p6-output").innerHTML=`It's a regular day.`;
    }

}

function chapterThreeForLoop(){
    document.getElementById("ch3-p7-output").style.display="inline";
    container =""
    for (let i = 1; i<= 5; i++) {
        console.log(i);
        container += `${i}\t\t`
        document.getElementById("ch3-p7-output").innerHTML=`${container}`;
      }
}

function chapterThreeWhileLoop(){
    document.getElementById("ch3-p8-output").style.display="inline";
    container =""
    let i = 1;
    while (i <= 5) {
        console.log(i);
        container += `${i}\t\t`;
        i++
    };

    document.getElementById("ch3-p8-output").innerHTML=`${container}`
}

function chapterThreeDoWhileLoop(){
    document.getElementById("ch3-p9-output").style.display="inline";
    container = ""
    let i = 1;
    do {
        console.log(i);
        container += i+"\t\t";
        document.getElementById("ch3-p9-output").innerHTML=`${container}`
        i++;
    } while (i<=5);
}

function chapterThreeBreak() {
    document.getElementById("ch3-p10-output").style.display="inline";

    container = ""
    for (let i = 0; i < 5; i++) {
        if(i === 3){
          break;
        }
        console.log(i);
        container += i+"\t\t";
        document.getElementById("ch3-p10-output").innerHTML=`${container}`
      }

}

function chapterThreeContinue(){
    document.getElementById("ch3-p11-output").style.display="inline";
    container = ""
    for (let i = 0; i < 5; i++) {
        if(i === 2){
          continue;
        }
        console.log(i);
        container += i;
        document.getElementById("ch3-p11-output").innerHTML=`${container}`
      }
}

function chapterThreeNestedLoops(){
    document.getElementById("ch3-p12-output").style.display="inline";
    container = ""
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
        console.log(`${i}, ${j}`)
        container += i,j;
        document.getElementById("ch3-p12-output").innerHTML=container;
        }
      }

      // multiplication table
    // define the size of multiplication table
    const size = 10;
    // outer loop
    for (let i = 1; i <= size; i++) {
    // inner loop
    for (let j = 1; j <= size; j++ ){
        // calculate and display the product
        const product = i * j;
        console.log(`${i} * ${j} = ${product}`);
        document.getElementById("ch3-p12-output")
    }
    }
}

function chapterFour(){
    document.getElementById("ch4output").style.display="inline";
    function functionName() {
        console.log("Hello, world");
        document.getElementById("ch4output").innerHTML="Hello, wolrd"
      }
      //Function calling
    functionName()
}


function chapterFourFuncPara(){
    document.getElementById("ch4-p2-output").style.display="inline";
    function greet(name) {
        console.log(`Hello, ${name}!`);
        document.getElementById(`ch4-p2-output`).innerHTML=`Hello, ${name}!`
      }
      
      //Function calling
      greet(name = prompt("Enter your name: "))
}

function chapterFourValueReturn(){
    document.getElementById("ch4-p3-output").style.display="inline";
    function add(a, b){
        return a + b;
    }

    const result = add(3, 5);
    console.log(result);

    document.getElementById("ch4-p3-output").innerHTML=`${result}`;

}

function chapterFourvariableScope(){
    document.getElementById("ch4-p4-output").style.display="inline";
    var globalVariable = "i'm in global scope";
    function sayHello(){
        console.log(globalVariable); // Accessible from within the function;
    }
    sayHello();
    console.log(globalVariable); // Accessible outside the function;
    document.getElementById("ch4-p4-output").innerHTML=`${globalVariable}`;
}

function chapterFourlocalVariable(){
    document.getElementById("ch4-p5-output").style.display="inline";
    function sayHello(){
        var globalVariable = "i'm in global scope";
        console.log(globalVariable); // Accessible within the function;
        document.getElementById("ch4-p5-output").innerHTML=`${globalVariable}`;
        
        }
        sayHello();
        console.log(globalVariable); // Results in an error; not accessible outside the function;


}



function chapterFourBlockScope(){
    document.getElementById("ch4-p6-output").style.display="inline";
    if (true){
        let blockVariable = "I'm in block scope";
      console.log(blockVariable); // Accessible within the block;
      document.getElementById("ch4-p6-output").innerHTML=`${blockVariable}`
      }
      console.log(blockVariable); // Accessible within the block

}

function chapterFourfuncParameter(){
    document.getElementById("ch4-p7-output").style.display="inline";
    function add(a, b){
        var result = a +b;
        return result
      }
    sum = add(3,4)
    console.log(sum);
    document.getElementById("ch4-p7-output").innerHTML=sum
    

}
function universityCheck() {
    const studentId = "c1220642";
    let attempts = 0;
  
    while (attempts < 3) {
      let university = prompt("Enter your University: ");
      let id = prompt("Enter your Id: ");
  
      if (university.toLowerCase() === "just" && id.toLowerCase() === studentId) {
        document.getElementById("idcard").style.display = "inline";
        break;
      }
  
      attempts++;
    }
  
    if (attempts === 3) {
      alert("You reached max attempts!");
    }
  }



  
function scoreprogram(){
var total = 0;
let java = Number(prompt("Enter score of Javascript"));
while(isNaN(java) || java <0 || java >100){
    alert("Invalid score")
    java = Number(prompt("Enter score of Javascript"));
    if(!isNaN(java) && java <=100 && java >=0){
        break;

    }
}
total +=java

let networking = Number(prompt("Enter score of Networking"));
while(isNaN(networking) || networking <0 || networking >100){
    alert("Invalid score")
    networking = Number(prompt("Enter score of Networking"));
    if(!isNaN(networking) && networking <=100 && networking >=0){
        break;
    }
}
total += networking;

let db = Number(prompt("Enter score of Database"));
while(isNaN(db) || db <0 || db >100){
    alert("Invalid score")
    db = Number(prompt("Enter score of Database"));
    if(!isNaN(db) && db <=100 && db >=0){
        
        break;
    }
}
total += db;
let disc = Number(prompt("Enter score of Discrete mathematics"));
while(isNaN(disc) || disc <0 || disc >100){
    alert("Invalid score")
    disc = Number(prompt("Enter score of Discrete mathematics"));
    if(!isNaN(disc) && disc <=100 && disc >=0){
        
        break;
    }

}
total += disc
let en = Number(prompt("Enter score of English"));
while(isNaN(en) || en <0 || en >100){
    alert("Invalid score")
    en = Number(prompt("Enter score of English"));
    if(!isNaN(en) && en<=100 && en>=0){
        
        break;
    }

}
total  += en
let mm = Number(prompt("Enter score of Multimedia"));
while(isNaN(mm) || mm <0 || mm >100){
    alert("Invalid score")
    mm = Number(prompt("Enter score of Multimedia"));
    if(!isNaN(mm) && mm <=100 && mm>=0){
        
        break;
    }
}
total += mm;
console.log("Total score: " + total);

let average = Math.round(total/6)
document.getElementById("total").innerHTML=total;
document.getElementById("average").innerHTML=average+"%";
document.getElementById("jsmarks").innerHTML=java;
document.getElementById("networkingmarks").innerHTML=networking;
document.getElementById("dbmarks").innerHTML=db;
document.getElementById("discmarks").innerHTML=disc;
document.getElementById("enmarks").innerHTML=en;
document.getElementById("mmmarks").innerHTML=mm;


if (average >= 90) {
document.getElementById("grade").innerHTML="A+";
document.getElementById("gpa").innerHTML=4.00;

}
else if (average >= 80) {
document.getElementById("grade").innerHTML="A";
document.getElementById("gpa").innerHTML=3.67;
}

else if (average >= 75) {
document.getElementById("grade").innerHTML="A-";
document.getElementById("gpa").innerHTML=3.33;
}
else if (average >= 70) {
document.getElementById("grade").innerHTML="B+";
document.getElementById("gpa").innerHTML=3.00;
}
else if (average >= 65) {
document.getElementById("grade").innerHTML="B";
document.getElementById("gpa").innerHTML=2.67;
}
else if (average >= 60) {
document.getElementById("grade").innerHTML="B-";
document.getElementById("gpa").innerHTML=2.33;
}
else if (average >= 55) {
document.getElementById("grade").innerHTML="C+";
document.getElementById("gpa").innerHTML=2.00;
}
else if (average >= 50) {
document.getElementById("grade").innerHTML="C";
document.getElementById("gpa").innerHTML=1.67;
}
else{
document.getElementById("grade").innerHTML="F";
document.getElementById("gpa").innerHTML="Fail";
}
}




function matrix(){
            
    for(let i =1; i<=3; i++){
        let row = ''
        for(j=1; j<=3; j++){
            row += (i*j)+'\t'
            
        }
        console.log(`${row}`)
        
    }
}