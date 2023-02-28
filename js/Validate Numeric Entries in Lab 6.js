// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
if (isNaN(parseFloat(investment))) {
    alert("Please enter a numeric investment amount.");
  } else {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if (isNaN(parseFloat(rate)) || parseFloat(rate) < 0 || parseFloat(rate) > 6) {
        alert("Please enter a numeric interest rate between 0 and 6.");
    } else {
      years = parseInt(prompt('Enter the number of years you want to invest for'));  
      if (isNaN(parseInt(years)) || parseInt(years) < 1 || parseInt(years) > 30) {
        alert("Please enter a numeric number of years between 1 and 30.");
        } else {
        futureValue = investment;
        for (let i = 0; i < years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
        }
        // DISPLAY RESULT
        document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
        document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
        document.write(`Years: ${years}<br>`);
        document.write(`Future value: $${futureValue.toFixed(2)}`);
                }
            }
        }
    