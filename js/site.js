// Get values from user inputs
// Start/controller function
function getValues() {
    // Get values from page inputs
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Input validation
    // Parse input into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // Call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter integers");
    }

    
}

// Generate numbers fom startValue to endValue
// Logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];

    // Get numbers from start to finish
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

// Display the numbers and mark evens as bold
// Display/view functions
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        if(number % 2 === 0) {
            className = "even";
        }
        else {
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}