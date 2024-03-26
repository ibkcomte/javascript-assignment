1.

let number = 6
if(number > 0) {
  console.log('positive')
}else if(number < 0){
  console.log('negative')
}else if(number == 0){
  console.log('zero')
}


2.
let properties = 77;
let properties2 = (properties % 2);

if( properties2 == 0) {
  console.log("even");
} else if( properties2 == 1 ){
  console.log("odd");
} 

3.
function multipleOfnumber(variable){
   if(variable % 3 == 0){
    console.log("Multiple of 3");
  }else if(variable % 5 == 0){
    console.log("Multiple of 5");
  }else{
    console.log("Neither");
  }
}
multipleOfnumber(12);



4.
let givenyr = 2210;
if(givenyr >= 1901 && givenyr <= 2000) {
  console.log("20th century");
}else if(givenyr >= 2001 && givenyr <= 2100) {
  console.log("21st century");
}else if(givenyr >= 2101 && givenyr <= 2200) {
  console.log("22nd century");
} else {
  console.log("century not specified");
}

5.
let value = 30;
if(value < 10){
  console.log(0);
} else if(value >= 10 && value <= 50) {
  console.log(1);
}else if (value >= 51 && value <= 100){
  console.log(2);
} else {
  console.log(3);
}




