document.write("<h2>Заголовок h2</h2>");
document.writeln("Hello");
////////////////////////////////////
for (let i = 0; i < 10; i++) {
  document.writeln(i);
}
document.writeln("<br>");
//////////////////////////////////////
let user = { name: "Dima", age: 29 }
document.writeln(user.name);
user.name = "One";
document.writeln(user.name);
document.writeln("<br>");
//////////////////////////////////////
let fruit = prompt("Какой фрукт купить?", "apple"); //ввод
let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert(bag.apple); // 5, если fruit="apple" //вывод
document.writeln("<br>");
//////////////////////////////////////
let variable = {
  number: 21,
  word: "hello",
  logic: true
}
document.writeln("<br>");
for (key in variable) {
  document.writeln(key);
}
document.writeln("<br>");
for (key in variable) {
  document.writeln(variable[key]);
}
document.writeln("<br>");
///////////////////////////
let codes = {
  "49": "Германия",
  "41": "Швейцария",
  "44": "Великобритания",
  // ..,
  "1": "США"
};
for (let code in codes) {
  document.writeln(code ); // 
}
document.writeln("<br>");
let codes2 = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};
for (let code in codes2) {
  document.writeln(code ); // 49, 41, 44, 1
}
document.writeln("<br>");
/////////////////////////// 
////https://learn.javascript.ru/object#tasks////

/////---1---/////
let user2 = {
  name: "John",
  surname: "Smith"
}
document.writeln(user2.name); 
user2.name = "Pete";
document.writeln(user2.name); 
delete user2.name;
document.writeln(user2.name); 
document.writeln("<br>");

/////---2---/////
let schedule = {};
document.writeln(isEmpty(schedule));
schedule["8:30"] = "get up";
document.writeln(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}
document.writeln("<br>");

/////---3---/////
const user3 = {
  name: "John"
};
document.writeln(user3.name);
user3.name = "Pete";
document.writeln(user3.name);
document.writeln("<br>");




/////////////////////////////////////

/////////////////////////////////////
function Test() {
  // объявляем и инициализируем свойства
  this.x = 5;
  this.y = 3;
  // объявляем методы
  this.sum = function () {
    return this.x + this.y;
  }
  // выполняем иные конструктивные действия
  document.writeln("<br>");
  document.writeln("Constructor: x=" + this.x + ", y=" + this.y + ", sum=" + this.sum());
}
Test();
/////////////////////////////