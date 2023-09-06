
 function Pay() {

var hourlyPay = document.getElementById("Hpay").value;
var numberOfhours = document.getElementById("hours").value;
var daysWorked = document.getElementById("days").value;
var weeklyPay= document.getElementById("Wpay");
var monthlyPay = document.getElementById("Mpay");
var yearlyPay = document.getElementById("Ypay");
var weeklyResult = document.getElementById("wnumber");
var monthlyResult = document.getElementById("mnumber");
var yearlyResult = document.getElementById("ynumber");
    /*Logical Conditions */ 
        if (hourlyPay < 0 & daysWorked > 7) {
            
            return weeklyPay.innerHTML = hourlyPay + " and " + daysWorked + " is not a valid response";
    
        }
        if (hourlyPay < 0) {
            
            return weeklyPay.innerHTML = hourlyPay + " is not a valid response";
        }
        if (numberOfhours < 0) {
           
            return weeklyPay.innerHTML = numberOfhours + " is not a valid response", none;
        }
        if (daysWorked < 0) {
            
            return weeklyPay.innerHTML = daysWorked + " is not a valid response";
        }
        if (daysWorked > 7) {
            
            return weeklyPay.innerHTML = daysWorked + " is not a valid response";
        }
        else {
           
            var weeklyIncome = ((hourlyPay * numberOfhours) * (daysWorked));
            var monthlyIncome = weeklyIncome * 4;
            var  yearlyIncome = monthlyIncome * 12;
            return weeklyPay.innerHTML = "Your weekly income is " + "$" + weeklyIncome.toLocaleString(), 
                   monthlyPay.innerHTML = "Your monthly income is " + "$" + monthlyIncome.toLocaleString(),
                   yearlyPay.innerHTML = "Your yearly income is " + "$" + yearlyIncome.toLocaleString(),
                    weeklyResult.innerHTML ="$" + weeklyIncome.toLocaleString(),
                    monthlyResult.innerHTML ="$" + monthlyIncome.toLocaleString(),
                    yearlyResult.innerHTML = "$" + yearlyIncome.toLocaleString();
         }; 

};

function Expenses() {

    var weeklyExptot = document.getElementById("w-exp");
    var monthlyExptot = document.getElementById("m-exp");
    var yearlyExptot = document.getElementById("y-exp");

     /*Grab the inputs for monthly Expenses*/ 
var bValue =Number(document.getElementById("bills").value);
var rValue= Number(document.getElementById("rent").value);
var nValue =Number(document.getElementById("nec").value);

/*Grab the values inputed and store them*/ 
var hourlyPay = document.getElementById("Hpay").value;
var numberOfhours = document.getElementById("hours").value;
var daysWorked = document.getElementById("days").value;

/*Attatch the income descriptions to a more accessable variable*/ 
var weeklyPay= document.getElementById("Wpay");
var monthlyPay = document.getElementById("Mpay");
var yearlyPay = document.getElementById("Ypay");

/*SHow them on the calculator*/ 

var weeklyResult = document.getElementById("wnumber");
var monthlyResult = document.getElementById("mnumber");
var yearlyResult = document.getElementById("ynumber");

var weeklyIncome = ((hourlyPay * numberOfhours) * (daysWorked));
var monthlyIncome = weeklyIncome * 4;
var  yearlyIncome = monthlyIncome * 12;

var monthlyExpenses = (bValue + rValue + nValue);
var monthlyIncome2 = monthlyIncome-(monthlyExpenses);

var weeklyExpenses =monthlyExpenses/4
var weeklyIncome2 = weeklyIncome-weeklyExpenses

var yearlyExpenses = monthlyExpenses * 12;
var yearlyIncome2 = yearlyIncome- yearlyExpenses;


return weeklyResult.innerHTML ="$" + weeklyIncome2.toLocaleString(), 
        monthlyResult.innerHTML ="$" + monthlyIncome2.toLocaleString(),
        yearlyResult.innerHTML = "$" + yearlyIncome2.toLocaleString(),
        weeklyExptot.innerHTML = "$" + weeklyExpenses.toLocaleString(),
        monthlyExptot.innerHTML = "$" + monthlyExpenses.toLocaleString(),
        yearlyExptot.innerHTML ="$" + yearlyExpenses.toLocaleString();


};

/*Calculate savings based off input*/  

function Savings() {
    
    var weeklySavedresult = document.getElementById("wsaved");
    var monthlySavedresult = document.getElementById("msaved");
    var yearlySavedresult = document.getElementById("ysaved");

    var weeklyPay= document.getElementById("Wpay");
    var monthlyPay = document.getElementById("Mpay");
    var yearlyPay = document.getElementById("Ypay");

    var bValue =Number(document.getElementById("bills").value);
    var rValue= Number(document.getElementById("rent").value);
    var nValue =Number(document.getElementById("nec").value);

    var savings = Number(document.getElementById("psaves").value); 
    var hourlyPay = document.getElementById("Hpay").value;
    var numberOfhours = document.getElementById("hours").value;
    var daysWorked = document.getElementById("days").value;

    var weeklyResult = document.getElementById("wnumber");
    var monthlyResult = document.getElementById("mnumber");
    var yearlyResult = document.getElementById("ynumber");

    var weeklyIncome = ((hourlyPay * numberOfhours) * (daysWorked));
    var monthlyIncome = weeklyIncome * 4;
    var  yearlyIncome = monthlyIncome * 12;

    var monthlyExpenses = (bValue + rValue + nValue);
    var monthlyIncome2 = monthlyIncome-(monthlyExpenses);

    var weeklyExpenses =monthlyExpenses/4;
    var weeklyIncome2 = weeklyIncome-weeklyExpenses;

    var yearlyExpenses = monthlyExpenses * 12;
    var yearlyIncome2 = yearlyIncome- yearlyExpenses;

    var weeklySavings = weeklyIncome2 * savings;

    var monthlySavings = savings * monthlyIncome2;

    var yearlySavings = monthlySavings * 12;

    var weekLeftover = weeklyIncome2 - weeklySavings;
    var monthLeftover =  monthlyIncome2 - monthlySavings;
    var yearLeftover = yearlyIncome2 - yearlySavings;

    return  weeklyResult.innerHTML = "$" + weekLeftover.toLocaleString(),
            monthlyResult.innerHTML = "$" + monthLeftover.toLocaleString(),
            yearlyResult.innerHTML = "$" + yearLeftover.toLocaleString(),
            weeklySavedresult.innerHTML = "$" + weeklySavings.toLocaleString(),
            monthlySavedresult.innerHTML = "$" + monthlySavings.toLocaleString(),
            yearlySavedresult.innerHTML = "$" + yearlySavings.toLocaleString();
};

/**Summarize based off of numbers and give predictions .05 above and below */
function Budget() {

    var budgetSummary = document.getElementById("bdgt-txt");
    var budgetSummary2 = document.getElementById("bdgt-txt2");

    var weeklyExptot = document.getElementById("w-exp");
    var monthlyExptot = document.getElementById("m-exp");
    var yearlyExptot = document.getElementById("y-exp");

    var weeklyPay= document.getElementById("Wpay");
    var monthlyPay = document.getElementById("Mpay");
    var yearlyPay = document.getElementById("Ypay");

    var bValue =Number(document.getElementById("bills").value);
    var rValue= Number(document.getElementById("rent").value);
    var nValue =Number(document.getElementById("nec").value);

    var savings = Number(document.getElementById("psaves").value); 
    var hourlyPay = document.getElementById("Hpay").value;
    var numberOfhours = document.getElementById("hours").value;
    var daysWorked = document.getElementById("days").value;

    var weeklyResult = document.getElementById("wnumber");
    var monthlyResult = document.getElementById("mnumber");
    var yearlyResult = document.getElementById("ynumber");

    var weeklyIncome = ((hourlyPay * numberOfhours) * (daysWorked));
    var monthlyIncome = weeklyIncome * 4;
    var  yearlyIncome = monthlyIncome * 12;

    var monthlyExpenses = (bValue + rValue + nValue);
    var monthlyIncome2 = monthlyIncome-(monthlyExpenses);

    var weeklyExpenses =monthlyExpenses/4;
    var weeklyIncome2 = weeklyIncome-weeklyExpenses;

    var yearlyExpenses = monthlyExpenses * 12;
    var yearlyIncome2 = yearlyIncome- yearlyExpenses;

    var weeklySavings = weeklyIncome2 * savings;

    var monthlySavings = savings * monthlyIncome2;

    var yearlySavings = monthlySavings * 12;

    var weekLeftover = weeklyIncome2 - weeklySavings;
    var monthLeftover =  monthlyIncome2 - monthlySavings;
    var yearLeftover = yearlyIncome2 - yearlySavings;

    var percentSavings = savings * 100;

    var yearlySavingsabove = yearlyIncome2 * (savings + .05);
    var yearlySavingsbelow = yearlyIncome2 * (savings - .05);



    return  budgetSummary.innerHTML = "Based off of the information you entered, you will be able to spend $" + weekLeftover.toLocaleString() + " a week and $" + monthLeftover.toLocaleString() +
     " a month" + ' in order to save $' + percentSavings + "% of your income, leaving you with $" + yearLeftover.toLocaleString() + " by the end of the year if left untouched!",
            budgetSummary2.innerHTML = "If you want to spend 5% more, your savings would be $" + yearlySavingsbelow.toLocaleString() + " a year and if you want to spend 5% less, your savings would be "
            + yearlySavingsabove.toLocaleString() + " a year";
};

/*Clear calculator */

function Clear() { 

    var weeklySavedresult = document.getElementById("wsaved");
    var monthlySavedresult = document.getElementById("msaved");
    var yearlySavedresult = document.getElementById("ysaved");
    
    var weeklyExptot = document.getElementById("w-exp");
    var monthlyExptot = document.getElementById("m-exp");
    var yearlyExptot = document.getElementById("y-exp");

    var weeklyPay= document.getElementById("Wpay");
    var monthlyPay = document.getElementById("Mpay");
    var yearlyPay = document.getElementById("Ypay");

    var bValue =Number(document.getElementById("bills").value);
    var rValue= Number(document.getElementById("rent").value);
    var nValue =Number(document.getElementById("nec").value);

    var savings = Number(document.getElementById("psaves").value); 
    var hourlyPay = document.getElementById("Hpay").value;
    var numberOfhours = document.getElementById("hours").value;
    var daysWorked = document.getElementById("days").value;

    var weeklyResult = document.getElementById("wnumber");
    var monthlyResult = document.getElementById("mnumber");
    var yearlyResult = document.getElementById("ynumber");

    var weeklyIncome = ((hourlyPay * numberOfhours) * (daysWorked));
    var monthlyIncome = weeklyIncome * 4;
    var  yearlyIncome = monthlyIncome * 12;

    var monthlyExpenses = (bValue + rValue + nValue);
    var monthlyIncome2 = monthlyIncome-(monthlyExpenses);

    var weeklyExpenses =monthlyExpenses/4;
    var weeklyIncome2 = weeklyIncome-weeklyExpenses;

    var yearlyExpenses = monthlyExpenses * 12;
    var yearlyIncome2 = yearlyIncome- yearlyExpenses;

    var weeklySavings = weeklyIncome2 * savings;

    var monthlySavings = savings * monthlyIncome2;

    var yearlySavings = monthlySavings * 12;

    var budgetSummary = document.getElementById("bdgt-txt");
    var percentSavings = savings * 100


    return  weeklyResult.innerHTML = "",
    monthlyResult.innerHTML = "",
    yearlyResult.innerHTML = "",
    weeklyPay.innerHTML = "",
    monthlyPay.innerHTML = "",
    yearlyPay.innerHTML = "" ,
    weeklySavedresult.innerHTML = "",
    monthlySavedresult.innerHTML = "",
    yearlySavedresult.innerHTML = "",
    weeklyExptot.innerHTML = "",
    monthlyExptot.innerHTML = "",
    yearlyExptot.innerHTML ="",
    document.getElementById("bills").value ='',
    document.getElementById("rent").value='',
    document.getElementById("nec").value='',
    document.getElementById("psaves").value ='',
    document.getElementById("Hpay").value ='',
    document.getElementById("hours").value='', 
    document.getElementById("days").value ='',
    budgetSummary.innerHTML='';
};

