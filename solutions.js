// **1. Add Up.**

function addUp(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum = sum + i;
  }
  console.log("Q1.", sum);
}
addUp(4);

console.log("-------------------------------------");

// **2. Cubed.**

function sumOfCubes(x, y, z) {
  return x ** 3 + y ** 3 + z ** 3;
}

console.log("Q2.", sumOfCubes(1, 5, 9));

console.log("-------------------------------------");

// **3. String Check.**

function isStrStartOfWord(x, y) {
  console.log("Q3.", x == y.slice(0, x.length));
}

isStrStartOfWord("bu", "button");

// let text = "button";
// let result = text.includes("bu");
// console.log(result);

console.log("-------------------------------------");

// **4. Less Than or Equal to Zero?**

function isLEQZero(x) {
  console.log("Q4.", x <= 0 ? true : false);
}
isLEQZero(3);

console.log("-------------------------------------");

// **5. Count Occurrences.**

function countOccurrences(string, letter) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      counter++;
    }
  }
  return counter;
}
console.log("Q5.", countOccurrences("this is a string", "i"));

console.log("-------------------------------------");

// **6. X To The Power of X.**

function calcBaseToExponent(num1, num2) {
  const result = num1 ** num2;
  console.log("Q6.", result);
}
calcBaseToExponent(5, 5);

console.log("-------------------------------------");

// **7. Dog Years.**

function dogAge(x) {
  console.log("Q7.", x * 7);
}
dogAge(4);

console.log("-------------------------------------");

// **8. A Lifetime Supply...**

function calcLifetimeSupply(x, y) {
  const yearsLeft = 100 - x;
  const snacksAmount = yearsLeft * (y * 365.25);
  console.log(
    "Q8.", "The snack company should provide you with",
    snacksAmount.toFixed(0),
    "units, until you are a ripe old age of 100 Happy snacking!"
  );
}
calcLifetimeSupply(30, 2)

console.log("-------------------------------------");

// **Bonus:**

function calcLifetimeSupply2(x, y, z) {
  const yearsLeft = 100 - x;
  const snacksAmount = yearsLeft * (y * 365.25);
  if (z <= 100) {
    console.log("Bonus 1", snacksAmount.toFixed(0));
  } else {
    console.log("you are cut off!");
  }
}

calcLifetimeSupply2(25, 2, 100);

console.log("-------------------------------------");

// **Bonus 2:**

function calcLifetimeSupply3(x, y, z) {
  const yearsLeft = 100 - x;
  const snacksAmount = yearsLeft * (y * 365.25);
  if (z <= 100) {
    console.log("Bonus 2", snacksAmount.toFixed(0));
  } else {
    console.log("you are cut off!");
  }
}

calcLifetimeSupply3(32, 0.58, 65);

console.log("-------------------------------------");

// **9. Where's Waldo?**

function isWaldoHere(string) {
    
    if (string.includes('Wal')) {
        console.log('Q9.', true);
    }
    else {
        console.log('Q9.', false);
    }
}
isWaldoHere("Wait, don't you mean Wally?")

console.log("-------------------------------------");

// **10. Pie.**


// const numberOfPieces = 15;
// const persons = 5;

function isEqualSlices(x, y, z) {
   
    const neededSlices = y * z;

    if (x >= neededSlices) {
        console.log('Q10.', true);
    }
    else {
        console.log('Q10.', false);
    }
}
isEqualSlices(11, 5, 3)

console.log("-------------------------------------");

// **11. XO**

function isEqualNumXandO(str) { 
    sumsofarx = 0;
    sumsofary = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            sumsofarx++;
        }
        if (str[i] === 'o') {
            sumsofary++;
        }
    }
    if (sumsofarx === sumsofary) {
        return true;
    } else {
        return false;
    }
}

console.log("Q11.", isEqualNumXandO("ooxx"));
console.log("Q11.", isEqualNumXandO("xooxx"));


console.log("-------------------------------------");

// **12. isPrime?**

function isPrime(num) {
   
    for (let i = 2; i < num; i++) {
        if (num % i ===0)
        return false;
    }
    return num > 1;
}

console.log('Q12.', isPrime(0));
console.log('Q12.', isPrime(7));
console.log('Q12.', isPrime(9));
console.log('Q12.', isPrime(10));

console.log("-------------------------------------");

