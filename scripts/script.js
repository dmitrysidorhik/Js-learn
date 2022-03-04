document.write("<h2>Заголовок h2</h2>");
document.writeln("Hello");
for (let i = 0; i < 10; i++) {
    document.writeln(i);
}
document.writeln("<br>");
let user = { name: "Dima", age: 29 }
document.writeln(user.name);
user.name = "One";
document.writeln(user.name);
document.writeln("<br>");
let fruit = prompt("Какой фрукт купить?", "apple"); //ввод
let bag = {
    [fruit]: 5, // имя свойства будет взято из переменной fruit
};
alert(bag.apple); // 5, если fruit="apple" //вывод
document.writeln("<br>");


let user = {
    name: "John",
    surname: "Smith"
}
user.name = "Pete";
delete user.name;