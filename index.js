const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter your weight in kg: ', weight => {
    readline.question('Enter your height in meters: ', height => {
      const bmi = weight / (height * height);
      console.log(`Your BMI is ${bmi.toFixed(2)}`);
      readline.close();
    });
  });
  