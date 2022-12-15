/*
 *Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
 *For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and *month 11 (November), is part of the fourth quarter.
 */

//month variable/conts
const month = 4;

//function to check in which quarter is the month
const quarterOf = (month) => {
    //just checking if the number is > than 0 and less than 12
    if (month >0 && month <=12) {
        if (month <= 3) return 1;
        else if (month >= 4 && month <= 6) return 2;
        else if (month >= 7 && month <= 9) return 3;
        else return 4;
    }else
        return 'Put a Month between 1 to 12';
};

//displaying the quarter
console.log(quarterOf(month));
