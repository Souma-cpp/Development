function check_leap_year(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

var year = 2000 ;
if(check_leap_year(year)){
    console.log(`The year ${year} was a leap year`) ;
}else{
    console.log(`The year ${year} was not a leap year`) ;
}