function checkPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  // console.log(reverseStr.toLowerCase().replaceAll(' ', ''));
  // console.log(str.toLowerCase().replaceAll(' ', ''));
  if (reverseStr.toLowerCase().replaceAll(' ', '') === str.toLowerCase().replaceAll(' ', '')) {
    return true;
  }
  return false;
}

// console.log(checkPalindrome('топот'));
// console.log(checkPalindrome('ДовОд'));
// console.log(checkPalindrome('Кекс'));
// console.log(checkPalindrome('Лёша на полке клопа нашёл ')); // true

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
// функция должна вернуть NaN:
function digitExtract(strNumber) {
  let regex = /[^0-9]/ig;
  const positiveInteger = strNumber.replaceAll(regex, '');
  return parseInt(positiveInteger);
}
// Шпаргалка: https://devanych.ru/technologies/shpargalka-po-regulyarnym-vyrazheniyam
console.log(digitExtract('2023 год'));            // 2023
console.log(digitExtract('ECMAScript 2022'));     // 2022
console.log(digitExtract('1 кефир, 0.5 батона')); // 105
console.log(digitExtract('агент 007'));           // 7
console.log(digitExtract('а я томат'));           // NaN
