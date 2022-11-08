console.log('시작이 반이다');
console.clear();

let messi = 10;
console.log(messi);
console.log(messi);
console.log(messi);
console.log(messi);
messi = 30;
console.log(messi);

var hi = 'hello';
console.log(hi);
console.log(hi);
console.log(hi);
console.log(hi);
var hi = '안녕';
console.log(hi);
function change() {
  var hi = '안녕하세요';
  console.log(hi);
}
change();
console.log(hi);

console.clear();

let a = 2;
let b = 3;
console.log((a += b));
console.log(a);
console.log(b);
console.log((a -= b));
console.log((a *= b));
console.log((a /= b));
console.log(`현재 a;의 값은 ${a}`);
console.log(b % a);

console.clear();

let number;
console.log(number);
number = '문자열';
console.log(number);
number = null;
console.log(number);
number = 3;
console.log(typeof number);
console.log(typeof `${number}`);

let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let id = document.querySelector('#god');
let cls = document.querySelector('.ace');
console.log([h1, p, id, cls]);

let god = document.getElementById('god');
console.log(god);

let text = h1.textContent;
console.log(text);

console.log(text);
console.log(h1.textContent);
console.clear();

if (document.getElementById('god').textContent === '메시') {
  let god = (document.getElementById('god').textContent = '네이마루');
  console.log(god);
} else {
  god = null;
}

let forTest = ['messi', 'ronaldo', 'lunny', 'naimar'];
for (i = 0; i < forTest.length; i++) {
  console.log(forTest[i]);
}

function sayHello() {
  let hello = '인사';
  return 1, 2, 3, 4;
}

let returnHello = sayHello();
console.log(returnHello);

function sayHi() {
  let hi = '안녕~';
}

let noReturnHi = sayHi();
console.log(noReturnHi);

function sayAnything(thing, backNum) {
  console.log(`${thing}는(은) 공격수고 등번호는 ${backNum}이에요!`);
}

sayAnything('messi', messi);

function oddEven(num) {
  if (num % 2 === 0) {
    num = '짝수';
  } else if (num % 2 === 1) {
    num = '홀수';
  }
  return num;
}
console.log(oddEven(3));
console.log(oddEven(4));
console.clear();

const inputType = document.querySelector('#typing');
const inputClick = document.querySelector('#push');

const handleClick = function () {
  console.log('클릭되고 있어요!');
};

inputClick.onclick = handleClick;

let messiCountry = document.getElementById('godCountry');
let sonCountry = document.getElementById('aceCountry');

messiCountry.addEventListener('click', alertCountry);
sonCountry.addEventListener('click', alertCountry);

messiCountry.addEventListener('click', function () {
  console.log('국적은 아르헨티나입니다.');
});

messiCountry.removeEventListener('click', function () {
  console.log('국적은 아르헨티나입니다.');
});

function alertCountry(event) {
  let targetName = event.target.parentNode.textContent;
  if (targetName.includes('메시')) {
    alert('아르헨티나입니다.');
  } else {
    alert('대한민국입니다.');
  }
}

const appendButton = document.getElementById('push');
const playerInput = document.getElementById('typing');
console.log(document.querySelector('ul'));
playerInput.addEventListener('keydown', function () {
  console.log('키 입력');
});
appendButton.addEventListener('click', function () {
  console.log('div 생성 중');
  console.log(playerInput.value);
  const newLi = document.createElement('li');
  newLi.style.backgroundColor = 'red';
  document.querySelector('ul').appendChild(newLi);
});

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(form.team.value);
  console.log(form.league.value);
});
