
function displayResults(presults,probnum){
    var newHead = document.createElement("h4");
    newHead.textContent = probnum;
    var newDiv = document.createElement("div");
    newDiv.textContent = presults;
    document.getElementById("results").appendChild(newHead);
    document.getElementById("results").appendChild(newDiv);
}


// Add
function add(a, b){
    return (a + b);
}

displayResults("add(2, 4) = " + add(2, 4),"1. Add");

// Multiply
function multiply(a, b){
    var product = 0;
    for (var i = 1; i <= a; i++){
        product = add(product,b);
        
    }   
    return product;
}

displayResults("multiply(6, 8) = " + multiply(6, 8),"2. Multiply");

// Power
function power(x, n){
    var power = 1;
    for (var i = 1; i <= n; i++){
        power = multiply(power,x)
    }
    return power;
}

displayResults("power(2, 8) = " + power(2, 8), "3. Power");

// Factorial
function factorial(n){
    var factnum = 1;
    for (var i= (n-1); i>=1; i--){
        n = multiply(n,i);
    }
    return n;
}

displayResults("factorial(4) = " + factorial(4), "4. Factorial");


// Fibonacci
function fibonacci(n){
    var fibnum = 1;
    var b = 0;
    var temp = 0;
    if (n === 0){
        fibnum = 0;
    } else if(n === 1) {
        fibnum = 1;
    } else {
        for (var i = 1; i <= (n-2); i++){
            temp = fibnum;
            fibnum = add(fibnum,b);
            b = temp;  
        }
    }
    return fibnum;
}

displayResults("fibonacci(8) =  " + fibonacci(8), "5. Fibonacci");
