function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;
  console.log(
    "You have ",
    days,
    " days, ",
    weeks,
    " weeks, and ",
    months,
    "months left."
  );
}

function getmilk(bottles, capital) {
  var cost = bottles * 10;
  var change = capital - cost;
  if(cost > capital){
    console.log(`no change and extra ${cost - capital} dollars`) ;
  }else{
    console.log(`The cost is : ${cost} and the change is : ${change}`);
  }
}

getmilk(10 , 101);
