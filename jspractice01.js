/* window.alert("시작")
window.console.log("시작이 반이다") */
// alert("시작이 반이다");
console.log("시작이 반이다");
console.clear();
 
let messi = 10;
console.log(messi);
console.log(messi);
console.log(messi);
console.log(messi);
messi = 30;
console.log(messi);

var hi = "hello";
console.log(hi);
console.log(hi);
console.log(hi);
console.log(hi);
var hi = "안녕";
console.log(hi);
function change(){
  var hi = "안녕하세요";
  console.log(hi);
}
change();
console.log(hi);

// const promptSoccerPlayer = prompt("좋아하는 축구 선수는?");
// console.log(`제가 좋아하는 축구선수는 ${promptSoccerPlayer} 입니다.`);

console.clear();

let a = 2;
let b = 3;
console.log(a += b);
console.log(a);
console.log(b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(`현재 a;의 값은 ${a}`);
console.log(b % a);

console.clear();
//null과 undefined의 차이점: null == 없다, undefined == 아직 데이터가 정의되지 않았다.

let number;
console.log(number);
number = "문자열";
console.log(number);
number = null;
console.log(number);
number = 3;
console.log(typeof number);
console.log(typeof `${number}`);

let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let id = document.querySelector("#god");
let cls = document.querySelector(".ace");
console.log([h1,p,id,cls]);

let god = document.getElementById("god");
console.log(god);

let text = h1.textContent;
console.log(text);

h1.textContent = "득점왕 리스트";
console.log(text);
console.log(h1.textContent);
console.clear();

if(document.getElementById("god").textContent === "메시"){
  let god = document.getElementById("god").textContent = "네이마루";
  console.log(god);
}else{
  god = null;
};


// while(confirm("컨펌을 받아보자")){
//   console.log("확인..!")
// };

// console.log("넘어감");

let forTest = ["messi","ronaldo","lunny", "naimar"];
for(i=0; i< forTest.length; i++){
  console.log(forTest[i])
}
  
function sayHello(){
  let hello = "인사";
  return 1,2,3,4;
};

let returnHello = sayHello();
console.log(returnHello);

function sayHi(){
  let hi = "안녕~";
};

let noReturnHi = sayHi();
console.log(noReturnHi);

// const check = window.confirm("확인해보자");
// console.log(check);

function sayAnything(thing, backNum){
  console.log(`${thing}는(은) 공격수고 등번호는 ${backNum}이에요!`);
};

sayAnything("messi",messi);

function oddEven(num){
  if(num % 2 === 0){
    num = "짝수";
  }else if(num % 2 === 1){
    num = "홀수";
  };
  return num;
};
console.log(oddEven(3));
console.log(oddEven(4));
