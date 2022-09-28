// Variables

// result text
const resultHolder = document.querySelector(".result");
// operators buttons
const operators = document.querySelectorAll(".operator");
// number buttons
const numbers = document.querySelectorAll(".number");
// number 0 button
const zero = document.querySelector(".number-0");
// point button
const point = document.querySelector(".point");
// sign button
const sign = document.querySelector(".negative");
// percent button
const percent = document.querySelector(".percent");
// equal button
const equal = document.querySelector(".equal");
// clear button
const clear = document.querySelector(".clear");
// variables for calculate
let resultText = "";
let resultShow;
let currNumber = 0;
let calculated = false;
// Numbers
numbers.forEach(number => {
    number.addEventListener("click",() => {
        if(resultText === "") {
            resultText = number.textContent;
            resultShow = number.textContent;
            currNumber = number.textContent;
        }else if(resultText !== ""){
            if(calculated){
                resultText = "";
                resultShow = "";
                calculated = false;
            }
            resultText += number.textContent;
            resultShow += number.textContent;
            currNumber = number.textContent;
        }
        resultHolder.textContent = resultShow;
    })
})
// point button (.)
point.addEventListener("click", () => {
    calculated = false;
    if(!currNumber.includes(".")){
        if (resultText === ""){
            resultText = "0.";
            resultShow = "0.";
        }else if (resultText !== ""){
            resultText += ".";
            resultShow += ".";
        }
        resultHolder.textContent = resultShow;
    }
})
// Operators buttons (/ * - +)
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        calculated = false;
        if(resultText !== ""){
            resultText += operator.getAttribute("index");
            // resultShow += operator.getAttribute("index");
            resultShow = resultText;
            let char = operator.getAttribute("index");
            switch(char){
                case "*":
                    resultShow = resultText.replace("*","×");
                    break
                case "/":
                    resultShow = resultText.replace("/","÷");
                    break
            }
            resultHolder.innerHTML = resultShow;
        }
    })
})
// sign button (+/-)
sign.addEventListener("click", () => {
    calculated = false;
    if(resultText !== ""){
        resultText = String(resultText * "-1");
        resultHolder.innerHTML = resultText;
    }
})
// percent button (%)
percent.addEventListener("click", () => {
    calculated = false;
    if(resultText !== ""){
        resultText = String(resultText / "100");
        resultHolder.innerHTML = resultText;
    }
})
// clear Button (AC)
clear.addEventListener("click", () => {
    calculated = false;
    resultHolder.textContent = 0;
    resultShow = "";
    resultText = "";
})
// Equal button (=)
equal.addEventListener("click", () => {
    if(resultText !== ""){
        resultText = String(eval(resultText));
        resultShow = resultText;
        resultHolder.innerHTML = resultShow;
        calculated = true;
    }
})