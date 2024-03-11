const USER_DESCRIPTION_COUNT = 25;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Авдей',
  'Алексей',
  'Альберт',
  'Андрей',
  'Анатолий',
  'Антон',
  'Аркадий',
  'Артур',
  'Арсений',
  'Афанасий',
  'Богдан',
  'Борис',
  'Василий',
  'Виктор',
  'Владислав',
  'Владимир',
  'Вячеслав',

];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

// Генегация случайного целого числа:
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генерация случайного, не повторяющегося числа:
// Через замыкание
let generateID = (min, max) => {
  curr = min;
  return getGenerateID = () => {
    if (curr < max) {
      return curr++;
    }
    return null;
  };
};

let latestID = generateID();
let urlFotoID = generateID();
let commentFotoID = generateID();
let descriptionID = generateID();

// Логика по поиску случайного элемента в переданном массиве:
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для генерации объекта описания юзера:
const createUserDescription = function () {
  return {
    id: generateID(), // Идентификаторы не должны повторяться.
    url: `photos/${urlFotoID()}.jpg`, // Идентификаторы не должны повторяться.
    description: `Text${descriptionID()}.`,
    likes: getRandomInteger(15, 200),
    comments: {
      id: commentFotoID(), // Идентификаторы не должны повторяться.
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGE), // необходимо взять одно или два случайных предложения из представленных.
      name: getRandomArrayElement(NAMES),
    },
  };
};

const similarUserDescription = Array.from({ length: USER_DESCRIPTION_COUNT }, createUserDescription);

console.log(similarUserDescription);
