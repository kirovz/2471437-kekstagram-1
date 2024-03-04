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

// Генерация ID фото пользователя:
let latestID = 0;
const createID = function() {
  latestID += 1;
  return latestID;
};

let urlFotoID = 0;
const createUrlFotoID = function() {
  urlFotoID += 1;
  return urlFotoID;
};

let commentFotoID = 0;
const createCommentFotoID = function() {
  commentFotoID += 1;
  return commentFotoID;
};

let descriptionID = 0;
const createDescriptionID = function() {
  descriptionID += 1;
  return descriptionID;
};
// Логика по поиску случайного элемента в переданном массиве:
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUserDescription = function () {
  return {
    id: createID(), // Идентификаторы не должны повторяться.
    url: `photos/${createUrlFotoID()}.jpg`, // Идентификаторы не должны повторяться.
    description: `Text${createDescriptionID()}.`,
    likes: getRandomInteger(15, 200),
    comments: {
      id: createCommentFotoID(), // Идентификаторы не должны повторяться.
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGE), // необходимо взять одно или два случайных предложения из представленных.
      name: getRandomArrayElement(NAMES),
    },
  };
};

const similarUserDescription = Array.from({ length: USER_DESCRIPTION_COUNT }, createUserDescription);

console.log(similarUserDescription);
