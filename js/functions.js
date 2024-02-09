function checkPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  // console.log(reverseStr.toLowerCase().replaceAll(' ', ''));
  // console.log(str.toLowerCase().replaceAll(' ', ''));
  if (reverseStr.toLowerCase().replaceAll(' ', '') === str.toLowerCase().replaceAll(' ', '')) {
    return true;
  }
  return false;
}

console.log(checkPalindrome('топот'));
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));
console.log(checkPalindrome('Лёша на полке клопа нашёл ')); // true

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
// функция должна вернуть NaN:
function digitExtract(text) {
let  positiveInteger =

}

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN

// Метод repeat() конструирует и возвращает новую строку,
// содержащую указанное количество соединённых вместе копий строки,
// на которой он был вызван.
