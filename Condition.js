let isLoggedIn = true;

if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

function checkAge(age){
    if(age>=18){
        console.log("Eligible to vote");
    }

    else {
        console.log("Not eligible to vote");
    }
}

checkAge(10);
checkAge(20);


function checkNumber(Number) {
    if (Number>0){
     console.log("Num is positive");
    }
    else if(Number<0){

        console.log("Number is Negative")


    }
    else {
        console.log("Number is zero")

    }
}

checkNumber(20)
checkNumber(-12)
checkNumber(0)

//Switch
function checkDayOfWeek(DayNumber) {
    let day;
    switch(DayNumber){
            case 0:
              day = "Sunday";
              break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;

        default:
         return "Invalid day";
         
        


    }
    return day;
}

console.log(checkDayOfWeek(3));
console.log(checkDayOfWeek(7));

//Switch
let browser = "Chrome"
switch(browser){
    case "Chrome": console.log("launch Chrome"); break;
    case "firefox": console.log("launch firefox"); break;
    case "edge": console.log("launch edge"); break;
    case "microsoft": console.log("launch microsoft"); break;

    default:
    console.log ("invalid browser");
    break;
}
