
// exercise 2
let grades = [6.5,7,8,6,5];

function averageGrade(gradesArray){
  let sum = gradesArray.reduce((a,b) => a + b);
  let average = (sum/gradesArray.length).toFixed(2);
  console.log("The average is: " + average);
}

averageGrade(grades);

//exercise 3
let json = {
    "red":"#f00",
    "green":"#0f0",
    "blue":"#00f",
    "cyan":"#0ff",
    "magenta":"#f0f",
    "yellow":"#ff0",
    "black":"#000",
    "white":"#fff",
    "grey":"#ccc",
    "orange":"#e53"
}

function swapKeysForValues(jsonFile){
  let newJson = {};
  for (let key in jsonFile){
    newJson[jsonFile[key]] = key;
  }
  console.log(newJson);
}

swapKeysForValues(json);

//exercise 4
let string1 = "hgsyjt";
let string2 = "acfsrj";

function sortStrings(s1,s2){
  let s3 = s1.concat(s2);
  let sortedArray = s3.split('').sort()
  let charsArray = [...new Set(sortedArray)];
  let longestString = charsArray.join('');
  console.log(longestString);
}

function altSortStrings(s1,s2){
  let s3 = s1.concat(s2);
  let sortedArray = s3.split('').sort()
  let charsArray = [];
  for (let c of sortedArray){
    if (charsArray.indexOf(c) === -1) {
      charsArray.push(c);
    }
  }
  let longestString = charsArray.join('');
  console.log(longestString);
}

sortStrings(string1,string2);
altSortStrings(string1,string2);

//exercise 5

let a = [-3,2,23,56,7,3];
let b = [4,5];
let c = [];
let d = [56,7,9.2,5];

function lowestNumSum(array){
  if (validateArray(array)){
    let sorted = array.sort((a,b) => a - b);
    let positive = sorted.filter((n) => n > -1);
    let lowestNums = positive.splice(0,2);
    let sum = lowestNums.reduce((a,b) => a + b)
    console.log(sum);
  }
}

function validateArray(array){
  if (array.length < 4 ){
    console.log("Please provide an array of at least 4 integers.")
    return false;
  }
  for (let n of array){
    if (n !== Math.ceil(n)){
      console.log("Only integers are allowed. Remove floats.")
    return false;
    }
  }
  return true;
}

//the function sums only positive numbers
lowestNumSum(a);
//the function requires a min 4 integers array
lowestNumSum(b);
//the function doesn't accept emply arrays
lowestNumSum(c);
//the function doesn't accept floats
lowestNumSum(d);
