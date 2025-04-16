const displayScreen = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("calcButtons"));
let displayValue = "";

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText === "C") {
            displayValue = "";
            displayScreen.value = displayValue;
        } else if (e.target.innerText === "=" && displayValue.includes("/0")) {
            displayScreen.value = "Cannot divide by zero";
        } else if (e.target.innerText === "=") {
            try {
            
                const result = evaluateExpression(displayValue);
                displayValue = result.toString();
                displayScreen.value = result;
            } catch {
                displayScreen.value = "Error";
                displayValue = "";
            }
        } else {
            displayValue += e.target.innerText;
            displayScreen.value = displayValue;
        }
    });
});



function evaluateExpression(expression) {
    return math.evaluate(expression); 
}
