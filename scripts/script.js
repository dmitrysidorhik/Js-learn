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
let user2 = {
    name: "John",
    surname: "Smith"
}
user2.name = "Pete";
delete user2.name;
/////////////////////////////////////
let variable={
    number: 21,
    word: "hello",
    logic: true
}
document.writeln("<br>");
for (key in variable)
{
    document.writeln(key);
}
document.writeln("<br>");
for (key in variable)
{
    document.writeln(variable[key]);
}
document.writeln("<br>");
///////////////////////////

///////////////////////////
function Test(){
  // объявляем и инициализируем свойства
  this.x=5;
  this.y=3;
  // объявляем методы
  this.sum=function(){
    return this.x+this.y;
  }
  // выполняем иные конструктивные действия
  document.writeln("<br>");
  document.writeln("Constructor: x="+this.x+", y="+this.y+", sum="+this.sum());
}
Test();
/////////////////////////////