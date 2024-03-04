const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

let message = 'Всё отлично\!\ В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?\!\
 ';
message = message.split(/.|!/);

const USER_DESCRIPTION_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUserDescription = function () {
  return {
    id: getRandomInteger(),
    url: `photos/${getRandomInteger(1, 25)}.jpg`,
    description: `Text${getRandomInteger(1, 25)}.`,
    likes: getRandomInteger(15, 200),
    comments: {
      id: getRandomInteger(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(message),
      name: getRandomArrayElement(NAMES),
    },
  };
};

const similarWizardsUserDescription = Array.from({length: USER_DESCRIPTION_COUNT}, createUserDescription);
