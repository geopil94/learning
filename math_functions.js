'use strict';

var add = function (a, b) {
    return a + b;
};

var sub = function (a, b) {
    return a - b;
};

var mul = function (a, b) {
    return a * b;
};

var div = function (a, b) {
    return a / b;
};

add(sub(div(50, 2), mul(2, 5)), add(2, 3));
mul(add(sub(3, 5), mul(5, 7)),div(add(-3, -5), add(1, 0)));
sub(div(mul(3, 7), sub(2, 5)), add(add(6, 2), mul(1, 5)));
div(mul(sub(6, 5), add(5, 5)), add(div(5, 5), mul(5, 5)));
add(sub(div(mul(add(sub(3, 5), mul(5, 7)),div(add(-3, -5),
    add(1, 0))), sub(div(mul(3, 7), sub(2, 5)), add(add(6, 2),
    mul(1, 5)))), mul(2, 5)), div(mul(sub(6, 5), add(5, 5)),
    add(div(5, 5), mul(5, 5))));


var addNumbers = function(a, b) {
    var args = Array.from(arguments);   //я хотел написать args = [...arguments]; но он почему-то выдал ошибку.
    var numbers = [];
    args.forEach(function(item){        //избегание некорректного поведения функции
       if (typeof(item) === "number"){
           numbers.push(item);
       }
    });
    var result = 'can\'t find any numbers to operate!=(';
    if (numbers.length > 0) {           //работа с любым числом аргументов
         result = numbers.reduce(function(accumulator, currentValue){
            return accumulator + currentValue;
        });
    }
    return result;
};
addNumbers(1,2,3,4,'asdfsdf');