// Test Case 1
let num = 9; // "009"

if(num < 10){
    console.log(`00${num}`);
    
}else if(  10 > num < 100){
    console.log(`0${num}`);

}else if(   num >= 100){
    console.log(`0${num}`);

}

let num1 = 20; // "020"

if(num1 < 10){
    console.log(`00${num1}`);
}else if(  10 < num1 < 100){
    console.log(`0${num1}`);

}else if(   num1 >= 100){
    console.log(`0${num1}`);

}

let num2 = 110; // "110"

if(num2 < 10){
    console.log(`00${num2}`);

}else if(   num2 >= 100){
    console.log(`${num2}`);


}else if(  10 < num2 < 100){
    console.log(`0${num2}`);
}




let num3 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"


if(num3 == str){
    console.log("{num3} Is The Same Value As {str}")
}
 if(num3 ==str && num3 !== str){
    console.log("{num3} Is The Same Value As {str} But Not The Same Type")
}
if(num3 != str2 && num3 !== str2 ){
    console.log ("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
if(  str!==str2  ){

console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}






let num4 = 10;
let num5 = 30;
let num6 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"


if( num5 > num4 && num5 !== num4 ){
    console.log ("30 Is Larger Than 10 And Type string Not The Same Type As number")
}

if( num5 > num4 && num5 !== num4 ){
    console.log ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}


if( num6 !== num4 && num6 !== num5 ){
    console.log ("{num6} Value And Type Is Not The Same As {num4} And Type Is Not The Same As {num2}")
}