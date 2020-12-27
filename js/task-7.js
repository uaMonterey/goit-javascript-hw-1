      // Объявление и вызов функции
// Функция - это подпрограмма, независимая часть кода, предназначенная для многократного выполнения конкретной задачи с разными начальными значениями.
// Функцию можно представить как чёрный ящик, она получает что-то на входе (данные), и возвращает что-то на выходе (результат выполнения кода внутри неё).

      // 1. Объявление функции multiply
// function multiply() {
      // Тело функции
//   console.log('Это лог при вызове функции multiply');
// }

      // 2. Вызовы функции multiply
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'
// multiply(); // 'Это лог при вызове функции multiply'
// Объявление функции начинается с ключевого слова function, за которым идёт её имя - глагол отвечающий на вопрос «Что сделать?» и пара круглых скобок. Тело функции заключено в фигурные скобки {} и содержит инструкции, которые необходимо выполнить при её вызове. Затем, когда необходимо, функция вызывается с помощью имени и пары круглых скобок.

// Задание:

// Объяви функцию sayHi, внутри которой добавь console.log() со строкой 'Привет, это моя первая функция!'.

// После объявления вызови функцию sayHi.

function sayHi() {
  console.log('Привет, это моя первая функция!')
}

sayHi();