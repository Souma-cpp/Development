// goal :
//BMI <18.5, the output should be: "Your BMI is <bmi>,
//so you are underweight."
//BMI 18.5-24.9, the output should be "Your BMI is <bmi>,
//so you have a normal weight."
//BMI >24.9, the output should be "Your BMI is <bmi>,
//so you are overweight."

function bmiCalculator(weight, height) {
  interpretation = "";
  var bmi = Math.round(weight / Math.pow(height, 2));
  if (bmi < 18.5) {
    interpretation = `Your BMI is ${bmi}, so you are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
  } else {
    interpretation = `Your BMI is ${bmi}, so you are overweight.`;
  }
  return interpretation;
}

msg = bmiCalculator(73, 180);
console.log(msg);
