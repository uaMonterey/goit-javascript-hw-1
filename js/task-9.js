// Возврат значения


      // Теория

//       Оператор return используется для передачи значения из тела функции во внешний код. Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), и возвращает указанное значение в то место кода, где функция была вызвана.

// function multiply(x, y, z) {
//   console.log('Код до return выполняется как обычно');

  // Возвращаем результат выражения умножения

//   return x * y * z;

//   console.log('Этот лог никогда не выполнится, он стоит после return');
// }

        // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550
// Оператор return без явно указанного значения возвращает специальное значение undefined. При отсутствии return в теле функции, она все равно вернёт undefined.

// Задание:
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add(a, b, c) {
  //  Пиши код ниже этой строки
  
  return a + b + c;
  
  
//  Пиши код выше этой строки
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));